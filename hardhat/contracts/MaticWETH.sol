// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MaticWETH is ERC20 {
    constructor(uint256 initialSupply) ERC20("Wrapped Ether", "WETH") {
        _mint(msg.sender, initialSupply);
    }

    /**
     * Only for local test purposes.
     */
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
