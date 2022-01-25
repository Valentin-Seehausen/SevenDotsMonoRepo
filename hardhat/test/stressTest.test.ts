import { expect } from "chai";
import { SevenDotsTreasury } from "../typechain-types/SevenDotsTreasury";
import deployContracts from "./helper/deployContracts";
import { MaticWETH } from "../typechain-types/MaticWETH";
import constants from "./helper/constants";
import { SevenDotsToken } from "../typechain-types/SevenDotsToken";
import { ethers } from "hardhat";
import { SevenDotsAuctionHouse } from "../typechain-types/SevenDotsAuctionHouse";
import { SevenDotsStackFactory } from "../typechain-types/SevenDotsStackFactory";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Stresstest", function () {
  let token: SevenDotsToken,
    auctionHouse: SevenDotsAuctionHouse,
    stackFactory: SevenDotsStackFactory,
    WETH: MaticWETH;
  let deployer: SignerWithAddress, alice: SignerWithAddress;

  beforeEach(async () => {
    [deployer, alice] = await ethers.getSigners();
    ({ auctionHouse, stackFactory, token, WETH } = await deployContracts());
  });

  xit("[XLONG] Create 5000 stacks", async function () {
    this.timeout(30000);
    let sc = 0; // Stack Count has to be increased to increase contiuous id.
    for (let i = 0; i < 10000; i = i + 4) {
      // Stack two NFTs for deployer
      await token.safeMint(deployer.address, constants.seed.f4c1);
      await token.safeMint(deployer.address, constants.seed.f4c1);
      await token.approve(stackFactory.address, i + sc);
      await token.approve(stackFactory.address, i + sc + 1);
      await stackFactory.stackTokens(i + sc, i + sc + 1);

      // Stack two NFTs for alice
      await token.safeMint(alice.address, constants.seed.f4c1);
      await token.safeMint(alice.address, constants.seed.f4c1);
      await token.connect(alice).approve(stackFactory.address, i + sc + 2);
      await token.connect(alice).approve(stackFactory.address, i + sc + 3);
      await stackFactory.connect(alice).stackTokens(i + sc + 2, i + sc + 3);

      await ethers.provider.send("evm_mine", []);

      // Every 25th iteration unstack one for deployer
      if (i % 20 == 0 && i > 0) {
        await ethers.provider.send("evm_increaseTime", [
          constants.time.stackDuration,
        ]);
        await ethers.provider.send("evm_mine", []);
        console.log(i);
        let stacks = await stackFactory.stacksOfOwner(deployer.address);
        let id = stacks[stacks.length - 1].id;
        await stackFactory.unstack(id);
        sc++;
      }
    }
    await expect(
      await stackFactory.stacksOfOwner(deployer.address)
    ).to.be.of.length(9999);

    // increase time
    await ethers.provider.send("evm_increaseTime", [
      constants.time.stackDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Unstack should work
    await expect(stackFactory.unstack(9998)).not.to.be.reverted;
  });

  xit("[LONG] 500 Auctions", async function () {
    this.timeout(300000);
    for (let i = 0; i < 500; i++) {
      await auctionHouse.createAuction();
      await WETH.mint(deployer.address, constants.amounts.million);
      await WETH.connect(deployer).approve(
        auctionHouse.address,
        constants.amounts.million
      );
      await auctionHouse.bidOnAuction(i, constants.bids.firstSuccess);
      // Every 196th redeem an auction
      if (i % 19 == 0 && i > 0) {
        await ethers.provider.send("evm_increaseTime", [
          constants.time.auctionDuration / 10,
        ]);
        await ethers.provider.send("evm_mine", []);
        console.log(i);
      }
      if (i > 190) {
        await auctionHouse.redeemAuction(i - 190);
      }
    }
  });

  xit("[LONG] [UTILITY] Create seed to tokenURI", async function () {
    this.timeout(300000);
    // Create 196 Autions
    let promises = [];
    for (let i = 0; i < 196; i++) {
      promises.push(auctionHouse.createAuction());
    }
    await Promise.all(promises);
    // Collect 49 unique seeds
    let auctions = await auctionHouse.allAuctions();
    let seeds = <any>{};
    // save seeds in file
    for (let auction of auctions) {
      let seed = auction[3];
      seeds[seed] = seeds[seed] ? seeds[seed] + 1 : 1;
    }
    let promisesToken = [];
    let i = 0;
    for (let seed in seeds) {
      await token.safeMint(deployer.address, seed);
      let tokenURI = await token.tokenURI(i);
      i++;
      console.log(i);
      seeds[seed] = atob(tokenURI.substring(29));
    }
    // console.log(seeds); // Log output and move it to frontend
  });

  xit("Multiple users create stacks", async function () {
    // TokenId 0
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);
    await stackFactory.stackTokens(0, 1);

    await token.safeMint(alice.address, constants.seed.f4c1);
    await token.safeMint(alice.address, constants.seed.f4c1);
    await token.connect(alice).approve(stackFactory.address, 2);
    await token.connect(alice).approve(stackFactory.address, 3);
    await stackFactory.connect(alice).stackTokens(2, 3);

    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 4);
    await token.approve(stackFactory.address, 5);
    await stackFactory.stackTokens(4, 5);

    await expect(
      await stackFactory.stacksOfOwner(deployer.address)
    ).to.be.of.length(2);

    // increase time
    await ethers.provider.send("evm_increaseTime", [
      constants.time.stackDuration,
    ]);

    // Unstack should work
    await expect(stackFactory.connect(alice).unstack(1)).not.to.be.reverted;

    await expect(
      await stackFactory.stacksOfOwner(deployer.address)
    ).to.be.of.length(2);
  });
});
