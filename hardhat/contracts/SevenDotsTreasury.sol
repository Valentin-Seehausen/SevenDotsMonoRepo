// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "./SevenDotsRewardToken.sol";
import "./SevenDotsStakingToken.sol";

contract SevenDotsTreasury is
    Initializable,
    UUPSUpgradeable,
    AccessControlUpgradeable
{
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant TRIGGER_ROLE = keccak256("TRIGGER_ROLE");
    uint256 public currentStakingFaktor;
    uint64 public STAKING_RATE;
    uint64 public DENOMINATOR;

    SevenDotsRewardToken rewardToken;
    SevenDotsStakingToken stakingToken;
    IERC20 WETH;

    /**
     * @notice Overwrite for Upgradeblae
     */
    function _authorizeUpgrade(address)
        internal
        override
        onlyRole(OWNER_ROLE)
    {}

    function initialize(address _rewardToken, address _stakingToken)
        public
        initializer
    {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(OWNER_ROLE, msg.sender);
        _setupRole(TRIGGER_ROLE, msg.sender);
        rewardToken = SevenDotsRewardToken(_rewardToken);
        stakingToken = SevenDotsStakingToken(_stakingToken);
        WETH = IERC20(0x8cc8538d60901d19692F5ba22684732Bc28F54A3);
        currentStakingFaktor = 1 ether;
        STAKING_RATE = 1_000_025_200_000_000_000;
        DENOMINATOR = 1 ether;
    }

    /**
     * @notice Withdraws share of the treasury.
     * @dev Share is calculated by share of RewardToken.
     */
    function withdraw(uint256 amount) public {
        require(
            rewardToken.balanceOf(msg.sender) >= amount,
            "SD: Insufficient r7DOTS token."
        );
        uint256 wethAmount = (WETH.balanceOf(address(this)) * amount) /
            rewardToken.totalSupply();
        rewardToken.burnFrom(msg.sender, amount);
        WETH.transfer(msg.sender, wethAmount);
    }

    /**
     * @notice Maximum share of treasury.
     */
    function shareOfTreasury(address to) public view returns (uint256) {
        return
            (WETH.balanceOf(address(this)) * rewardToken.balanceOf(to)) /
            rewardToken.totalSupply();
    }

    /**
     * @notice WETH amount in treasury.
     */
    function treasuryAmount() public view returns (uint256) {
        return WETH.balanceOf(address(this));
    }

    /**
     * @notice Total supply of RewardToken.
     */
    function rewardTokenSupply() public view returns (uint256) {
        return rewardToken.totalSupply();
    }

    /**
     *   ____ _____  _    _  _____ _   _  ____
     *  / ___|_   _|/ \  | |/ /_ _| \ | |/ ___|
     *  \___ \ | | / _ \ | ' / | ||  \| | |  _
     *   ___) || |/ ___ \| . \ | || |\  | |_| |
     *  |____/ |_/_/   \_\_|\_\___|_| \_|\____|
     *
     */

    /**
     * @notice Stakes reward token, receives staking token;
     * @param rewardTokenAmount [uint] Amount of reward token
     * @dev amount gets devided by current staking faktor.
     */
    function stake(uint256 rewardTokenAmount) public {
        uint256 _stakeTokenAmount = (rewardTokenAmount * DENOMINATOR) /
            currentStakingFaktor;
        rewardToken.transferFrom(msg.sender, address(this), rewardTokenAmount);
        stakingToken.mint(msg.sender, _stakeTokenAmount);
    }

    /**
     * @notice Send stake token, reveive reward token
     * @param stakeTokenAmount [uint] Amount of staking token
     * @dev amount gets multiplied by current staking faktor.
     */
    function unstake(uint256 stakeTokenAmount) public {
        uint256 _rewardTokenAmount = (stakeTokenAmount * currentStakingFaktor) /
            DENOMINATOR;
        stakingToken.burnFrom(msg.sender, stakeTokenAmount);
        rewardToken.transfer(msg.sender, _rewardTokenAmount);
    }

    /**
     * @notice Staking works by increasing this staking faktor
     * @dev Only AuctionHouse can trigger this, when a stack get unstacked.
     */
    function increaseStakingFaktor() public onlyRole(TRIGGER_ROLE) {
        currentStakingFaktor =
            (currentStakingFaktor * STAKING_RATE) /
            DENOMINATOR;
    }

    /**
     * @notice Multiplies value by staking faktor
     * @param number [uint256] the number to be multiplied.
     */
    function multiplyByStakingFaktor(uint256 number)
        public
        view
        returns (uint256)
    {
        return (number * STAKING_RATE) / DENOMINATOR;
    }

    /**
     *      _       _           _
     *     / \   __| |_ __ ___ (_)_ __
     *    / _ \ / _` | '_ ` _ \| | '_ \
     *   / ___ \ (_| | | | | | | | | | |
     *  /_/   \_\__,_|_| |_| |_|_|_| |_|
     */

    /**
     * @notice In Hardhat test this address has to be set individually.
     * @param _weth address of the smart contract.
     */
    function setWETH(address _weth) public onlyRole(OWNER_ROLE) {
        WETH = IERC20(_weth);
    }
}
