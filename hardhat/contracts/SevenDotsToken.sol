// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import "./utils/base64.sol";
import "./SevenDotsMetadata.sol";

contract SevenDotsToken is
    Initializable,
    ERC721Upgradeable,
    ERC721EnumerableUpgradeable,
    PausableUpgradeable,
    AccessControlUpgradeable,
    ERC721BurnableUpgradeable,
    UUPSUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    CountersUpgradeable.Counter private _tokenIdCounter;
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

    mapping(uint256 => bytes32) idToSeed;
    SevenDotsMetadata metadata;
    uint256 _dotCount;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize(address _metadata) public initializer {
        __ERC721_init("SevenDots", "7DOTS");
        __ERC721Enumerable_init();
        __Pausable_init();
        __AccessControl_init();
        __ERC721Burnable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);

        metadata = SevenDotsMetadata(_metadata);
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function safeMint(address to, bytes32 seed) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = _tokenIdCounter.current();
        idToSeed[tokenId] = seed;
        _dotCount += metadata.countDots(seed);
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    )
        internal
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
        whenNotPaused
    {
        super._beforeTokenTransfer(from, to, tokenId);
        /** On Burn decrease dotCount and delete seed entry. */
        if (to == address(0)) {
            _dotCount -= metadata.countDots(idToSeed[tokenId]);
            delete idToSeed[tokenId];
        }
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyRole(UPGRADER_ROLE)
    {}

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(
            ERC721Upgradeable,
            ERC721EnumerableUpgradeable,
            AccessControlUpgradeable
        )
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @notice Returns next token id.
     */
    function getNextTokenId() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    /**
     *      _    ____ _____
     *     / \  |  _ \_   _|
     *    / _ \ | |_) || |
     *   / ___ \|  _ < | |
     *  /_/   \_\_| \_\|_|
     */

    /**
     * @notice Returns seed of token.
     * @param tokenId uint tokenId
     */
    function seedOfToken(uint256 tokenId) public view returns (bytes32) {
        require(_exists(tokenId), "SD: Token does not exist");
        return idToSeed[tokenId];
    }

    /**
     * @notice Counts all dots of a token.
     */
    function dotCountOf(uint256 tokenId) public view returns (uint256) {
        return metadata.countDots(seedOfToken(tokenId));
    }

    /**
     * @notice Total dot count of all tokens
     */
    function totalDotCount() public view returns (uint256) {
        return _dotCount;
    }

    /**
     * @notice TokenURI returns base64 endcoded URI
     * @param tokenId uint tokenId
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId), "SD: Token with this id does not exist.");
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                "{",
                                '"name":"#',
                                StringsUpgradeable.toString(tokenId),
                                '",',
                                '"description":"Seven Dots Token",',
                                metadata.calcAttributes(idToSeed[tokenId]),
                                ",",
                                '"image":"',
                                "data:image/svg+xml;base64,",
                                Base64.encode(
                                    bytes(metadata.calcSvg(idToSeed[tokenId]))
                                ),
                                '"}'
                            )
                        )
                    )
                )
            );
    }
}
