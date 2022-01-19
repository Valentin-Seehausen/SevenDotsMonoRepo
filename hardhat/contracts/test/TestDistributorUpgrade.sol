// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract TestDistributorUpgrade is
    Initializable,
    UUPSUpgradeable,
    AccessControlUpgradeable
{
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    address treasury;
    address artist;
    ERC20 WETH;

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
    function initialize(address _treasury) public initializer {
        __UUPSUpgradeable_init();
        __AccessControl_init();
        _setupRole(OWNER_ROLE, msg.sender);
        treasury = _treasury;
        artist = 0x5C8bFea4893541a3A38d7A844094BB92Fa5456ca;
        WETH = ERC20(0x8cc8538d60901d19692F5ba22684732Bc28F54A3);
    }

    /**
     * @notice Distributes complete WETH to artist and treasury.
     */
    function distribute() public {
        uint256 amount = WETH.balanceOf(address(this));
        // Send 90% WETH to treasury and 10% tokens to artist
        WETH.transfer(artist, (amount * 1) / 10);
        WETH.transfer(address(treasury), (amount * 9) / 10);
    }

    /**
     * @notice In Hardhat test this address has to be set individually.
     * @param _weth address of the smart contract.
     */
    function setWETH(address _weth) public onlyRole(OWNER_ROLE) {
        WETH = ERC20(_weth);
    }
}
