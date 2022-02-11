// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/utils/ERC721HolderUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./SevenDotsMetadata.sol";
import "./SevenDotsToken.sol";
import "./SevenDotsRewardToken.sol";
import "./SevenDotsTreasury.sol";
import "hardhat/console.sol";

contract SevenDotsStackFactory is
    Initializable,
    UUPSUpgradeable,
    ERC721HolderUpgradeable,
    AccessControlUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;

    /** Constants */
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    uint256 constant STACK_DURATION = 2 hours;
    uint256 constant STACK_REWARD = 7 ether;
    uint256 constant MAX_DOTS = 49;

    /** Contracts */
    SevenDotsToken token;
    SevenDotsRewardToken rewardToken;
    SevenDotsTreasury treasury;
    SevenDotsMetadata metadata;

    /** Variables */
    mapping(address => Stack[]) stacksByOwner;
    mapping(bytes32 => bool) uniqueSeedExists;

    /** Counters */
    CountersUpgradeable.Counter private _stackIdCounter;
    CountersUpgradeable.Counter private _stackCounter;

    /** Structs */

    struct Stack {
        uint24 id;
        uint24 token1;
        uint24 token2;
        address owner;
        uint40 stackTime;
    }

    /** Events */
    event Merge(
        uint256 indexed _tokenId,
        uint256 indexed _parentTokenId1,
        uint256 indexed _parentTokenId2,
        uint256 tokenId,
        uint256 parentTokenId1,
        uint256 parentTokenId2,
        bytes32 seed,
        bytes32 parentSeed1,
        bytes32 parentSeed2,
        uint256 dots,
        uint256 rarityPoints,
        address merger,
        uint256 time
    );

    /**
     * @notice Overwrite for Upgradeblae
     */
    function _authorizeUpgrade(address)
        internal
        override
        onlyRole(OWNER_ROLE)
    {}

    /**
     * @notice Constructor for Upgradeable
     */
    function initialize(
        address _token,
        address _rewardToken,
        address _treasury,
        address _metadata
    ) public initializer {
        _setupRole(OWNER_ROLE, msg.sender);
        token = SevenDotsToken(_token);
        rewardToken = SevenDotsRewardToken(_rewardToken);
        treasury = SevenDotsTreasury(_treasury);
        metadata = SevenDotsMetadata(_metadata);
    }

    /***
     *    ███████ ████████  █████   ██████ ██   ██ ██ ███    ██  ██████
     *    ██         ██    ██   ██ ██      ██  ██  ██ ████   ██ ██
     *    ███████    ██    ███████ ██      █████   ██ ██ ██  ██ ██   ███
     *         ██    ██    ██   ██ ██      ██  ██  ██ ██  ██ ██ ██    ██
     *    ███████    ██    ██   ██  ██████ ██   ██ ██ ██   ████  ██████
     */

    /**
     * @notice Stacks two tokens for PERIOD time.
     * @param token1 is the bottom. Its dots will always remain
     * @param token2 is the top. Its dots may be lost, when a column has >7 dots.
     */
    function stackTokens(uint24 token1, uint24 token2) external {
        // Can only stack own tokens
        require(token1 != token2, "SD: Cannot stack one token twice.");
        require(token.ownerOf(token1) == msg.sender, "SD: Not owner");
        require(token.ownerOf(token2) == msg.sender, "SD: Not owner");
        require(
            token.dotCountOf(token1) < 49,
            "SD: Unique tokens cannot be stacked"
        );
        require(
            token.dotCountOf(token2) < 49,
            "SD: Unique tokens cannot be stacked"
        );
        token.safeTransferFrom(msg.sender, address(this), token1);
        token.safeTransferFrom(msg.sender, address(this), token2);
        _checkUniqueness(token1, token2);
        stacksByOwner[msg.sender].push(
            Stack(
                uint24(_stackIdCounter.current()),
                token1,
                token2,
                msg.sender,
                uint40(block.timestamp)
            )
        );
        _stackIdCounter.increment();
        _stackCounter.increment();
    }

    /**
     * @notice Instantly merges two tokens.
     * @dev The parent tokens will be burned and the new token will be minted.
     * @dev This method was created after heavy user demand.
     * @param token1 is the bottom. Its dots will always remain
     * @param token2 is the top. Its dots may be lost, when a column has >7 dots.
     */
    function instantStackTokens(uint256 token1, uint256 token2) public {
        require(token1 != token2, "SD: Cannot stack one token twice.");
        require(token.ownerOf(token1) == msg.sender, "SD: Not owner");
        require(token.ownerOf(token2) == msg.sender, "SD: Not owner");
        require(
            token.dotCountOf(token1) < 49,
            "SD: Unique tokens cannot be stacked"
        );
        require(
            token.dotCountOf(token2) < 49,
            "SD: Unique tokens cannot be stacked"
        );
        _checkUniqueness(token1, token2);

        uint256 tokenId = token.getNextTokenId();
        bytes32 seed1 = token.seedOfToken(token1);
        bytes32 seed2 = token.seedOfToken(token2);

        bytes32 newSeed = metadata.merge(seed1, seed2);
        uint256 dots = metadata.countDots(newSeed);
        uint256 rarityPoints = metadata.getRarityPoints(newSeed);

        token.burn(token1);
        token.burn(token2);

        _triggerStaking();

        // mint merged token
        token.safeMint(msg.sender, newSeed);

        // transfer stack reward token
        rewardToken.mint(msg.sender, STACK_REWARD);

        emit Merge(
            tokenId,
            token1,
            token2,
            tokenId,
            token1,
            token2,
            newSeed,
            seed1,
            seed2,
            dots,
            rarityPoints,
            msg.sender,
            block.timestamp
        );
    }

    /**
     * @notice Checks if unique seed (49 dots) already exists. Bypasses at <49 dots.
     * @param token1 uint id of token 1
     * @param token2 uint id of token 2
     */
    function _checkUniqueness(uint256 token1, uint256 token2) internal {
        bytes32 newSeed = metadata.merge(
            token.seedOfToken(token1),
            token.seedOfToken(token2)
        );
        if (metadata.countDots(newSeed) == MAX_DOTS) {
            require(
                uniqueSeedExists[newSeed] != true,
                "SD: Unique Seed already exists."
            );
            uniqueSeedExists[newSeed] = true;
        }
    }

    /**
     * @notice burns the two parent tokens. Mints a new merged token.
     * @param stackId the stack has to be owned by msg.sender
     */
    function unstack(uint256 stackId) external {
        Stack memory stack;
        uint256 stackIndex;
        for (uint256 i = 0; i < stacksByOwner[msg.sender].length; i++) {
            if (stacksByOwner[msg.sender][i].id == stackId) {
                stack = stacksByOwner[msg.sender][i];
                stackIndex = i;
                break;
            }
        }
        require(stack.owner == msg.sender, "SD: No stack with this id.");
        require(
            stack.stackTime + STACK_DURATION <= block.timestamp,
            "SD: Stacking period not over."
        );
        // get new data
        bytes32 newSeed = metadata.merge(
            token.seedOfToken(stack.token1),
            token.seedOfToken(stack.token2)
        );
        // Delete stack entry
        stacksByOwner[msg.sender][stackIndex] = stacksByOwner[msg.sender][
            stacksByOwner[msg.sender].length - 1
        ];
        stacksByOwner[msg.sender].pop();
        _stackCounter.decrement();
        // Burn parent tokens
        token.burn(stack.token1);
        token.burn(stack.token2);

        _triggerStaking();

        // mint merged token
        token.safeMint(msg.sender, newSeed);
        // transfer stack reward token
        rewardToken.mint(msg.sender, STACK_REWARD);
    }

    function _triggerStaking() internal {
        rewardToken.mint(
            address(treasury),
            treasury.multiplyByStakingFaktor(
                rewardToken.balanceOf(address(treasury))
            ) - rewardToken.balanceOf(address(treasury))
        );
        treasury.increaseStakingFaktor();
    }

    /**
     * @notice get owner stacks
     */
    function stacksOfOwner(address owner) public view returns (Stack[] memory) {
        return stacksByOwner[owner];
    }

    /**
     * @notice Returns Count of all stacks
     */
    function stackCount() public view returns (uint256) {
        return _stackCounter.current();
    }

    /***
     *    ███    ███ ██ ███    ██ ████████ ██ ███    ██  ██████
     *    ████  ████ ██ ████   ██    ██    ██ ████   ██ ██
     *    ██ ████ ██ ██ ██ ██  ██    ██    ██ ██ ██  ██ ██   ███
     *    ██  ██  ██ ██ ██  ██ ██    ██    ██ ██  ██ ██ ██    ██
     *    ██      ██ ██ ██   ████    ██    ██ ██   ████  ██████
     */

    function mintRewardToken(address to, uint256 amount)
        public
        onlyRole(OWNER_ROLE)
    {
        rewardToken.mint(to, amount);
    }
}
