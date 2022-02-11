import { expect } from "chai";
import { ethers } from "hardhat";
import { SevenDotsToken } from "../typechain-types/SevenDotsToken";
import { SevenDotsStackFactory } from "../typechain-types/SevenDotsStackFactory";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import deployContracts from "./helper/deployContracts";
import { SevenDotsRewardToken } from "../typechain-types/SevenDotsRewardToken";
import constants from "./helper/constants";

describe("StackFactory", function () {
  let token: SevenDotsToken,
    rewardToken: SevenDotsRewardToken,
    stackFactory: SevenDotsStackFactory;
  let deployer: SignerWithAddress, alice: SignerWithAddress;

  beforeEach(async () => {
    [deployer, alice] = await ethers.getSigners();
    ({ token, rewardToken, stackFactory } = await deployContracts());
  });

  it("Stacks two NFTs", async function () {
    // Mint two NFTs
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);

    // create a Stack
    await stackFactory.stackTokens(0, 1);

    // and transfer token
    await expect(await token.ownerOf(0)).to.equal(stackFactory.address);
    await expect(await token.balanceOf(stackFactory.address)).to.equal(2);

    // check if stack was created
    const now = (
      await ethers.provider.getBlock(await ethers.provider.getBlockNumber())
    ).timestamp;
    await expect(
      await stackFactory.stacksOfOwner(deployer.address)
    ).to.deep.equal([
      [
        0, // id
        0, // token1
        1, // token2
        deployer.address, // owner
        now, // block.timestamp of test environment
      ],
    ]);

    // too early to unstack
    await expect(stackFactory.unstack(0)).to.be.reverted;

    // increase time
    await ethers.provider.send("evm_increaseTime", [
      constants.time.stackDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // now unstack should work
    await expect(stackFactory.unstack(0)).not.to.be.reverted;

    // Parent tokens should be burned
    await expect(token.ownerOf(0)).to.be.reverted;

    // New NFT should be minted
    await expect(await token.balanceOf(deployer.address)).to.equal(1);
    await expect(await token.ownerOf(2)).to.equal(deployer.address);

    // new NFT should be minted and have two dots
    await expect(await token.seedOfToken(2)).to.equal(constants.seed.f4c11); // old NFTs should be burned

    // Stack reward should have been payed out
    await expect(await rewardToken.balanceOf(deployer.address)).to.equal(
      constants.amounts.stackReward
    );
  });

  it("Instant Stacks two NFTs", async function () {
    // Mint two NFTs
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);

    const now = (
      await ethers.provider.getBlock(await ethers.provider.getBlockNumber())
    ).timestamp;

    await expect(stackFactory.instantStackTokens(0, 1))
      .to.emit(stackFactory, "Merge")
      .withArgs(
        2,
        0,
        1,
        2,
        0,
        1,
        constants.seed.f4c11,
        constants.seed.f4c1,
        constants.seed.f4c1,
        2,
        6,
        deployer.address,
        now + 1
      );

    // New NFT should be minted
    await expect(await token.balanceOf(deployer.address)).to.equal(1);
    await expect(await token.ownerOf(2)).to.equal(deployer.address);

    // new NFT should be minted and have two dots
    await expect(await token.seedOfToken(2)).to.equal(constants.seed.f4c11); // old NFTs should be burned

    // Stack reward should have been payed out
    await expect(await rewardToken.balanceOf(deployer.address)).to.equal(
      constants.amounts.stackReward
    );
  });

  it("Stack reverts if trying to stack a foreign token", async function () {
    // Deployer mints two NFTs
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);

    // Alice trys to illegally stack them
    await expect(stackFactory.connect(alice).stackTokens(0, 1)).to.be.reverted;
  });

  it("Stack reverts if trying to stack one token twice", async function () {
    // Deployer mints one NFTs
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 0);

    // Tries to stack it twice
    await expect(stackFactory.stackTokens(0, 0)).to.be.reverted;
  });

  it("Stack reverts when not approved", async function () {
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);

    await expect(stackFactory.stackTokens(0, 1)).to.be.reverted;
  });

  it("Stack count works", async function () {
    // Stack two NFTs
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);
    await stackFactory.stackTokens(0, 1);

    await expect(await stackFactory.stackCount()).to.be.equal(1);

    // Stack two more
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 2);
    await token.approve(stackFactory.address, 3);
    await stackFactory.stackTokens(2, 3);

    await expect(await stackFactory.stackCount()).to.be.equal(2);

    // increase time
    await ethers.provider.send("evm_increaseTime", [
      constants.time.stackDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    stackFactory.unstack(0);

    await expect(await stackFactory.stackCount()).to.be.equal(1);
  });
});
