import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import { ethers } from "hardhat";
import { SevenDotsAuctionHouse } from "../typechain-types/SevenDotsAuctionHouse";
import { SevenDotsToken } from "../typechain-types/SevenDotsToken";
import constants from "./helper/constants";
import deployContracts from "./helper/deployContracts";

describe("Mint AuctionHouse", function () {
  let token: SevenDotsToken, auctionHouse: SevenDotsAuctionHouse;
  let deployer: SignerWithAddress, alice: SignerWithAddress;

  beforeEach(async () => {
    [deployer, alice] = await ethers.getSigners();
    ({ token, auctionHouse } = await deployContracts());
  });

  it("First Mint is f1 c1", async function () {
    await auctionHouse.mintNewToken(deployer.address);
    await expect(await token.balanceOf(deployer.address)).to.equal(1);
    await expect(atob((await token.tokenURI(0)).substring(29))).to.equal(
      constants.tokenURI[0]
    );
  });

  // Should not run all the time, takes >10s
  xit("[LONG] Check many mints", async function () {
    let promises = [];
    for (let i = 0; i < 197; i++) {
      promises.push(auctionHouse.mintNewToken(deployer.address));
    }
    // 2th Mint is f2 c2
    await expect(atob((await token.tokenURI(0)).substring(29))).to.equal(
      constants.tokenURI[0]
    );
    // 29th Mint is f2 c2
    await expect(atob((await token.tokenURI(0)).substring(29))).to.equal(
      constants.tokenURI[0]
    );
    await expect(atob((await token.tokenURI(28)).substring(29))).to.equal(
      constants.tokenURI[28]
    );
    // 196th Mint is f7 c6
    await expect(atob((await token.tokenURI(195)).substring(29))).to.equal(
      constants.tokenURI[195]
    );
    // 197th Mint is f1 c1
    await expect(atob((await token.tokenURI(196)).substring(29))).to.equal(
      constants.tokenURI[196]
    );
  });
});
