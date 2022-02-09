// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/utils/ERC721HolderUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./SevenDotsMetadata.sol";
import "./SevenDotsToken.sol";
import "./SevenDotsRewardToken.sol";
import "./SevenDotsTreasury.sol";
import "hardhat/console.sol";

contract SevenDotsAuctionHouse is
    Initializable,
    UUPSUpgradeable,
    AccessControlUpgradeable,
    ERC721HolderUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;

    /** Constants */
    address constant artist = 0x5C8bFea4893541a3A38d7A844094BB92Fa5456ca;
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    uint256 constant AUCTION_DURATION = 1 days;
    uint256 constant MAX_AUCTIONS = 196;
    uint256 constant MAX_DOTS = 49;
    uint256 constant START_BID = 0.001 ether;
    uint256 constant MIN_AUCTION_INCREMENT = 0.001 ether;
    uint256 constant AUCTION_CREATOR_REWARD = 0.1 ether;
    uint256 constant MAX_TOTAL_AUCTIONS = 77777;

    /** Contracts */
    IERC20 WETH;
    SevenDotsToken token;
    SevenDotsRewardToken rewardToken;
    SevenDotsTreasury treasury;
    SevenDotsMetadata metadata;

    /** Variables */
    uint24[] openAuctionIds;
    uint24[] closedAuctionIds;
    mapping(uint24 => Auction) auctionsById;

    /** Counters */
    CountersUpgradeable.Counter private _auctionIdCounter;
    CountersUpgradeable.Counter private _mintEditionCounter;

    /** Structs */

    struct Auction {
        uint256 highestBid;
        address highestBidder;
        uint40 end;
        bytes32 seed;
        uint24 id;
    }

    /** Events */

    event Create(uint256 _id, bytes32 seed, address creator);

    event Bid(
        uint256 indexed _id,
        address indexed _oldHighestBidder,
        uint256 id,
        address oldHighestBidder,
        address highestBidder,
        uint256 highestBid,
        uint256 time
    );

    event Redeem(
        uint256 indexed _id,
        uint256 id,
        address highestBidder,
        uint256 highestBid,
        uint256 time
    );

    event End(
        uint256 indexed _id,
        bytes32 indexed _seed,
        address indexed _highestBidder,
        uint256 id,
        bytes32 seed,
        address highestBidder,
        uint256 highestBid,
        uint256 time
    );

    /** Methods */

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
        __UUPSUpgradeable_init();
        __AccessControl_init();
        __ERC721Holder_init();
        _setupRole(OWNER_ROLE, msg.sender);
        WETH = IERC20(0x8cc8538d60901d19692F5ba22684732Bc28F54A3);
        token = SevenDotsToken(_token);
        rewardToken = SevenDotsRewardToken(_rewardToken);
        treasury = SevenDotsTreasury(_treasury);
        metadata = SevenDotsMetadata(_metadata);
    }

    /***
     *     █████  ██    ██  ██████ ████████ ██  ██████  ███    ██ ███████
     *    ██   ██ ██    ██ ██         ██    ██ ██    ██ ████   ██ ██
     *    ███████ ██    ██ ██         ██    ██ ██    ██ ██ ██  ██ ███████
     *    ██   ██ ██    ██ ██         ██    ██ ██    ██ ██  ██ ██      ██
     *    ██   ██  ██████   ██████    ██    ██  ██████  ██   ████ ███████
     */

    /**
     * @notice Creates an auction, if there is a free auction slot.
     */
    function createAuction() public {
        _pruneAuctions();
        require(0 < freeAuctionSlots(), "SD: No free auction slot.");
        _createAuction();
        rewardToken.mint(msg.sender, AUCTION_CREATOR_REWARD);
    }

    /**
     * @notice Creates a new auction
     * @dev Auction Ids are uint24 (max value 16,777,216), as there will be max 77,777 Auctions.
     */
    function _createAuction() internal {
        uint24 id = _popNewAuctionId();
        bytes32 seed = _popNewSeed();
        openAuctionIds.push(id);
        auctionsById[id] = Auction(
            START_BID,
            address(0),
            uint40(block.timestamp + AUCTION_DURATION),
            seed,
            id
        );
        emit Create(id, seed, msg.sender);
    }

    /**
     * @notice Removes ids of closed auction from openAuctionIds.
     * @dev this helps keeping the gas costs of createAuction reasonable.
     */
    function _pruneAuctions() internal {
        uint256 _now = block.timestamp;
        uint24[] memory _tempOpenAuctionIds = new uint24[](
            openAuctionIds.length
        );
        uint24 openCount;
        uint24 closedCount;
        uint256 remaindingTailLength;
        for (uint256 i = 0; i < openAuctionIds.length; i++) {
            Auction memory _auction = auctionsById[openAuctionIds[i]];
            // When auction did not end, all following did not end neither.
            // So safe length of remainding tail and break out of loop.
            if (_now < _auction.end) {
                remaindingTailLength = openAuctionIds.length - i;
                break;
            } else if (_auction.highestBidder == address(0)) {
                // Auction did end, but is not closed because nobody bid.
                _tempOpenAuctionIds[openCount] = _auction.id;
                openCount++;
            } else {
                // Auction is closed.
                closedAuctionIds.push(_auction.id);
                closedCount++;
                emit End(
                    _auction.id,
                    _auction.seed,
                    _auction.highestBidder,
                    _auction.id,
                    _auction.seed,
                    _auction.highestBidder,
                    _auction.highestBid,
                    block.timestamp
                );
            }
        }
        // When all auctions are in remainding tail, nothing has to be done.
        if (remaindingTailLength == openAuctionIds.length) {
            return;
        }
        // When >0 auctions are closed, auctions get pruned
        if (closedCount > 0) {
            uint24[] memory _newOpenAuctionIds = new uint24[](
                openCount + remaindingTailLength
            );
            for (uint256 i = 0; i < openCount; i++) {
                _newOpenAuctionIds[i] = _tempOpenAuctionIds[i];
            }
            // tail starts at index openCount + closedCount
            for (uint256 i = 0; i < remaindingTailLength; i++) {
                _newOpenAuctionIds[openCount + i] = openAuctionIds[
                    openCount + closedCount + i
                ];
            }
            openAuctionIds = _newOpenAuctionIds;
        }
    }

    /**
     * @notice Returns all open auctions.
     * @dev An auction is open when it did not end or did not receive a bid.
     */
    function openAuctions() public view returns (Auction[] memory) {
        uint256 count = _openAuctionCount();
        uint256 _now = block.timestamp;
        uint24 index = 0;
        Auction[] memory computedOpenAuctions = new Auction[](count);
        for (uint24 i; index < count; i++) {
            Auction memory _auction = auctionsById[openAuctionIds[i]];
            if (_now < _auction.end || _auction.highestBidder == address(0)) {
                computedOpenAuctions[index] = _auction;
                index++;
            }
        }
        return computedOpenAuctions;
    }

    function bidOnAuction(uint24 auctionId, uint256 amount) public {
        Auction memory _auction = auctionsById[auctionId];
        address oldHighestBidder = _auction.highestBidder;
        require(
            block.timestamp < _auction.end ||
                _auction.highestBidder == address(0),
            "SD: Cannot bid on auction because it ended and somebody else won."
        );
        require(
            amount >= _auction.highestBid + MIN_AUCTION_INCREMENT,
            string(
                abi.encodePacked(
                    "SD: Amount must be higher than ",
                    _auction.highestBid + MIN_AUCTION_INCREMENT
                )
            )
        );
        WETH.transferFrom(msg.sender, address(this), amount);

        // Send tokens to old highestBidder
        if (_auction.highestBidder != address(0)) {
            WETH.transfer(_auction.highestBidder, _auction.highestBid);
        }

        // Update Auction
        auctionsById[auctionId].highestBidder = msg.sender;
        auctionsById[auctionId].highestBid = amount;
        emit Bid(
            auctionId,
            oldHighestBidder,
            auctionId,
            oldHighestBidder,
            msg.sender,
            amount,
            block.timestamp
        );
    }

    /**
     * @notice Redeems Auction if it ended and
     */
    function redeemAuction(uint24 auctionId) public {
        Auction memory _auction = auctionsById[auctionId];
        require(
            _auction.highestBidder == msg.sender,
            "SD: Account is not highest bidder."
        );
        require(_auction.end < block.timestamp, "SD: Auction did not end yet.");
        _redeemAuction(auctionId);
    }

    /**
     * @notice Transfers Token and RewardToken
     */
    function _redeemAuction(uint24 auctionId) internal {
        _pruneAuctions();
        Auction memory _auction = auctionsById[auctionId];
        address highestBidder = _auction.highestBidder;
        uint256 highestBid = _auction.highestBid;
        bytes32 seed = _auction.seed;

        // Auction gets deleted first
        // TODO: Move into internal function
        for (uint24 i = 0; i < closedAuctionIds.length; i++) {
            uint24 _auctionId = closedAuctionIds[i];
            if (_auctionId == auctionId) {
                closedAuctionIds[i] = closedAuctionIds[
                    closedAuctionIds.length - 1
                ];
                closedAuctionIds.pop();
                delete auctionsById[auctionId];
            }
        }

        // Send 80% tokens to treasury and 20% tokens to artist
        WETH.transfer(artist, (highestBid * 1) / 5);
        WETH.transfer(address(treasury), (highestBid * 4) / 5);

        // Mind NFT to highestBidder
        token.safeMint(highestBidder, seed);
        emit Redeem(
            auctionId,
            auctionId,
            _auction.highestBidder,
            _auction.highestBid,
            block.timestamp
        );
    }

    /**
     * @notice Auction slots get updated on createAuction and redeemAuction.
     * @dev When MAX_TOTAL_AUCTIONS is reached, no auctions can be created.
     */
    function freeAuctionSlots() public view returns (uint256) {
        uint256 mintableAuctions = MAX_TOTAL_AUCTIONS -
            _auctionIdCounter.current();
        uint256 freeAuctions = MAX_AUCTIONS - openAuctionIds.length;
        if (freeAuctions < mintableAuctions) {
            return freeAuctions;
        } else {
            return mintableAuctions;
        }
    }

    /**
     * @notice Calculates count of active auctions.
     * @dev An auction is active when it did not end yet or has no bid.
     * @dev An auction is flagged after 7 days, so there should be <1400 auctions at all time.
     */
    function openAuctionCount() public view returns (uint256) {
        return _openAuctionCount();
    }

    function _openAuctionCount() internal view returns (uint256) {
        uint256 count;
        uint256 _now = block.timestamp;
        for (uint24 i; i < openAuctionIds.length; i++) {
            Auction memory _auction = auctionsById[openAuctionIds[i]];
            if (_now < _auction.end || _auction.highestBidder == address(0)) {
                count++;
            }
        }
        return count;
    }

    /**
     * @notice Count of closed auctions
     */
    function closedAuctionCount() public view returns (uint256) {
        return closedAuctionIds.length;
    }

    /**
     * @notice Returns all closed auctions
     */
    function closedAuctions() public view returns (Auction[] memory) {
        uint256 _now = block.timestamp;
        Auction[] memory _closedAuctions = new Auction[](
            closedAuctionIds.length +
                (openAuctionIds.length - _openAuctionCount())
        );
        for (uint256 i; i < closedAuctionIds.length; i++) {
            _closedAuctions[i] = auctionsById[closedAuctionIds[i]];
        }
        uint256 index = openAuctionIds.length;
        for (uint256 i; i < openAuctionIds.length; i++) {
            Auction memory _auction = auctionsById[openAuctionIds[i]];
            if (
                _now < _auction.end || _auction.highestBidder == address(0)
            ) {} else {
                _closedAuctions[index] = _auction;
                index++;
            }
        }
        return _closedAuctions;
    }

    /**
     * @notice All Auctions, closed and open.
     */
    function allAuctions() public view returns (Auction[] memory) {
        uint256 count = openAuctionIds.length + closedAuctionIds.length;
        Auction[] memory _allAuctions = new Auction[](count);
        for (uint256 i; i < closedAuctionIds.length; i++) {
            _allAuctions[i] = auctionsById[closedAuctionIds[i]];
        }
        for (uint256 i; i < openAuctionIds.length; i++) {
            _allAuctions[closedAuctionIds.length + i] = auctionsById[
                openAuctionIds[i]
            ];
        }
        return _allAuctions;
    }

    /**
     * @notice Returns new auction id and implicitly increases auction id counter.
     */
    function _popNewAuctionId() internal returns (uint24) {
        uint24 _id = uint24(_auctionIdCounter.current());
        _auctionIdCounter.increment();
        return _id;
    }

    /***
     *    ███    ███ ██ ███    ██ ████████ ██ ███    ██  ██████
     *    ████  ████ ██ ████   ██    ██    ██ ████   ██ ██
     *    ██ ████ ██ ██ ██ ██  ██    ██    ██ ██ ██  ██ ██   ███
     *    ██  ██  ██ ██ ██  ██ ██    ██    ██ ██  ██ ██ ██    ██
     *    ██      ██ ██ ██   ████    ██    ██ ██   ████  ██████
     */

    /**
     * @notice Mints a new token. Continuous increasing mind edition determines seed.
     * @param to address of token receiver.
     */
    function mintNewToken(address to) public onlyRole(OWNER_ROLE) {
        token.safeMint(to, _popNewSeed());
    }

    /**
     * @notice Returns new seed and implicitly increases mint edition.
     */
    function _popNewSeed() internal returns (bytes32) {
        bytes32 seed = generateSeed(_mintEditionCounter.current());
        _mintEditionCounter.increment();
        return seed;
    }

    /**
     * @notice Generates seed from an edition
     * @param edition continuous numeration of minted tokens
     */
    function generateSeed(uint256 edition) public view returns (bytes32) {
        uint256[7] memory dna;
        dna[generateField(edition) - 1] = generateColor(edition);
        return metadata.encode(dna);
    }

    /**
     * @notice Generates the Field to place the dot from the edition.
     * @param edition continuous numeration of minted tokens
     */
    function generateField(uint256 edition) public pure returns (uint256) {
        return ((edition / 28) % 7) + 1;
    }

    /**
     * @notice Generates the color of the dot from the edition.
     * @param edition continuous numeration of minted tokens
     */
    function generateColor(uint256 edition) public pure returns (uint256) {
        uint256 field = generateField(edition);
        uint256 color;
        uint256 d = (edition % 28) + 1;
        for (uint256 i = 1; i <= 7; i++) {
            if (d <= i) {
                color = i;
                break;
            } else {
                d -= i;
            }
        }
        return ((color + field - 2) % 7) + 1;
    }

    /***
     *     █████  ██████  ███    ███ ██ ███    ██
     *    ██   ██ ██   ██ ████  ████ ██ ████   ██
     *    ███████ ██   ██ ██ ████ ██ ██ ██ ██  ██
     *    ██   ██ ██   ██ ██  ██  ██ ██ ██  ██ ██
     *    ██   ██ ██████  ██      ██ ██ ██   ████
     */

    /**
     * @notice When auctions are not redeemed, they can clutter the database,
     * therefore they can be cleaned by owner.
     * @dev This will also send the NFT to the auction winner to stay fair.
     */
    function cleanAuction(uint24 auctionId) public onlyRole(OWNER_ROLE) {
        Auction memory _auction = auctionsById[auctionId];

        require(_auction.end < block.timestamp, "SD: Auction did not end yet.");
        _redeemAuction(auctionId);
    }

    /**
     * @notice In Hardhat test this address has to be set individually.
     * @param _weth address of the smart contract.
     */
    function setWETH(address _weth) public onlyRole(OWNER_ROLE) {
        WETH = IERC20(_weth);
    }

    /**
     * @notice Owner can monitor all auctions.
     */
    function allAuctionsCount()
        public
        view
        onlyRole(OWNER_ROLE)
        returns (uint256)
    {
        return openAuctionIds.length + closedAuctionIds.length;
    }
}
