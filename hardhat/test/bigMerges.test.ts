import { expect } from "chai";
import { ethers } from "hardhat";
import { SevenDotsToken } from "../typechain-types/SevenDotsToken";
import { SevenDotsStackFactory } from "../typechain-types/SevenDotsStackFactory";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import deployContracts from "./helper/deployContracts";
import constants from "./helper/constants";
import { SevenDotsMetadata } from "../typechain-types/SevenDotsMetadata";

describe("Big Merges", function () {
  let token: SevenDotsToken,
    stackFactory: SevenDotsStackFactory,
    metadata: SevenDotsMetadata;
  let deployer: SignerWithAddress, alice: SignerWithAddress;

  beforeEach(async () => {
    [deployer, alice] = await ethers.getSigners();
    ({ token, stackFactory, metadata } = await deployContracts());
  });

  it("At big merges, dots can be lost", async function () {
    await token.safeMint(deployer.address, constants.seed.rareRainbowTwo);
    await token.safeMint(deployer.address, constants.seed.rareRainbowSix);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);
    await expect(await token.dotCountOf(0)).to.be.equal(14);
    await expect(await token.dotCountOf(1)).to.be.equal(42);

    // create a Stack
    await stackFactory.stackTokens(0, 1);

    // increase time
    await ethers.provider.send("evm_increaseTime", [
      constants.time.stackDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    stackFactory.unstack(0);

    // new NFT should be minted and be super rare rainbow
    // await expect((await token.))
    await expect(await token.seedOfToken(2)).to.equal(
      constants.seed.rareRainbowSeven
    );
    await expect(await token.dotCountOf(2)).to.be.equal(49);
  });

  it("Tokens with 49 dots are unique", async function () {
    // This will give rare rainbow seven
    await token.safeMint(deployer.address, constants.seed.rareRainbowTwo);
    await token.safeMint(deployer.address, constants.seed.rareRainbowFive);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);
    await stackFactory.stackTokens(0, 1);

    // This too, but it should revert
    await token.safeMint(deployer.address, constants.seed.rareRainbowOne);
    await token.safeMint(deployer.address, constants.seed.rareRainbowSix);
    await token.approve(stackFactory.address, 2);
    await token.approve(stackFactory.address, 3);
    await expect(stackFactory.stackTokens(2, 3)).to.be.reverted;

    // This should work. 49 dots, but not the same
    await token.safeMint(deployer.address, constants.seed.commonRainbowOne);
    await token.approve(stackFactory.address, 4);
    await expect(stackFactory.stackTokens(2, 4)).not.to.be.reverted;
  });

  it("Cannot stack unique tokens", async function () {
    await token.safeMint(deployer.address, constants.seed.rareRainbowTwo);
    await token.safeMint(deployer.address, constants.seed.rareRainbowSeven);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);
    await expect(stackFactory.stackTokens(0, 1)).to.be.reverted;
    await expect(stackFactory.stackTokens(1, 0)).to.be.reverted;
  });

  it("NFT with <49 dots will not trigger uniqueness check", async function () {
    await token.safeMint(deployer.address, constants.seed.rareRainbowTwo);
    await token.safeMint(deployer.address, constants.seed.rareRainbowTwo);
    await token.safeMint(deployer.address, constants.seed.rareRainbowTwo);
    await token.safeMint(deployer.address, constants.seed.rareRainbowTwo);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);
    await token.approve(stackFactory.address, 2);
    await token.approve(stackFactory.address, 3);
    await expect(stackFactory.stackTokens(0, 1)).not.to.be.reverted;
    await expect(stackFactory.stackTokens(2, 3)).not.to.be.reverted;
  });
});
