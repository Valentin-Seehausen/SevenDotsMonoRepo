import { expect } from "chai";
import { ethers } from "hardhat";
import { SevenDotsToken } from "../typechain-types/SevenDotsToken";
import { SevenDotsRewardToken } from "../typechain-types/SevenDotsRewardToken";
import { SevenDotsStakingToken } from "../typechain-types/SevenDotsStakingToken";
import { SevenDotsTreasury } from "../typechain-types/SevenDotsTreasury";
import { SevenDotsStackFactory } from "../typechain-types/SevenDotsStackFactory";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import deployContracts from "./helper/deployContracts";
import { MaticWETH } from "../typechain-types/MaticWETH";
import constants from "./helper/constants";

describe("Staking", function () {
  let stackFactory: SevenDotsStackFactory,
    rewardToken: SevenDotsRewardToken,
    stakingToken: SevenDotsStakingToken,
    treasury: SevenDotsTreasury,
    token: SevenDotsToken,
    WETH: MaticWETH;
  let deployer: SignerWithAddress,
    alice: SignerWithAddress,
    bob: SignerWithAddress;

  beforeEach(async () => {
    [deployer, alice, bob] = await ethers.getSigners();
    ({ rewardToken, stakingToken, stackFactory, WETH, token, treasury } =
      await deployContracts());
  });

  it("Should stake token", async function () {
    // Alice stakes token
    await rewardToken.mint(alice.address, constants.bids.firstSuccess);
    await rewardToken
      .connect(alice)
      .approve(treasury.address, constants.bids.firstSuccess);
    await treasury.connect(alice).stake(constants.bids.firstSuccess);
    await expect(await rewardToken.balanceOf(alice.address)).to.equal(0);
    await expect(await stakingToken.balanceOf(alice.address)).to.equal(
      constants.bids.firstSuccess
    );
  });

  it("Two round staking", async function () {
    // Alice stakes token
    await rewardToken.mint(alice.address, constants.bids.firstSuccess);
    await rewardToken
      .connect(alice)
      .approve(treasury.address, constants.bids.firstSuccess);
    await treasury.connect(alice).stake(constants.bids.firstSuccess);
    await expect(await stakingToken.balanceOf(alice.address)).to.be.equal(
      constants.bids.firstSuccess
    );

    // Trigger staking reward first time
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);
    await stackFactory.stackTokens(0, 1);
    await ethers.provider.send("evm_increaseTime", [
      constants.time.stackDuration,
    ]);
    await ethers.provider.send("evm_mine", []);
    await stackFactory.unstack(0);

    // Bob stakes token
    await rewardToken.mint(bob.address, constants.bids.firstSuccess);
    await rewardToken
      .connect(bob)
      .approve(treasury.address, constants.bids.firstSuccess);
    await treasury.connect(bob).stake(constants.bids.firstSuccess);
    // Should receive slighty less staking token
    await expect(await stakingToken.balanceOf(bob.address)).to.be.equal(
      constants.amounts.firstBidStakingInRoundTwo
    );

    // Trigger staking reward second time
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 3);
    await token.approve(stackFactory.address, 4);
    await stackFactory.stackTokens(3, 4);
    await ethers.provider.send("evm_increaseTime", [
      constants.time.stackDuration,
    ]);
    await ethers.provider.send("evm_mine", []);
    await stackFactory.unstack(1);

    // Staking reward should have been triggered twice
    await expect(await treasury.currentStakingFaktor()).to.be.equal(
      constants.amounts.stakingFaktor2
    );

    // Alice and Bob unstake
    await stakingToken
      .connect(alice)
      .approve(treasury.address, constants.bids.firstSuccess);
    await treasury.connect(alice).unstake(constants.bids.firstSuccess);
    await stakingToken
      .connect(bob)
      .approve(treasury.address, constants.amounts.firstBidStakingInRoundTwo);
    await treasury
      .connect(bob)
      .unstake(constants.amounts.firstBidStakingInRoundTwo);

    // Alice should have received staking reward twice
    await expect(await rewardToken.balanceOf(alice.address)).to.be.equal(
      constants.amounts.firstBidAfterStaking2
    );
    // Bob should have received staking reward once
    // Plus there will be a rounding error
    await expect(await rewardToken.balanceOf(bob.address)).to.be.closeTo(
      constants.amounts.firstBidAfterStaking,
      1
    );
    await expect(await stakingToken.totalSupply()).to.be.equal(0);
  });

  it("Redeeming an auction should trigger staking reward", async function () {
    // Alice stakes token
    await rewardToken.mint(alice.address, constants.bids.firstSuccess);
    await rewardToken
      .connect(alice)
      .approve(treasury.address, constants.bids.firstSuccess);
    await treasury.connect(alice).stake(constants.bids.firstSuccess);
    await expect(await stakingToken.balanceOf(alice.address)).to.be.equal(
      constants.bids.firstSuccess
    );

    // Stack two Token, wait, unstack
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);
    await stackFactory.stackTokens(0, 1);
    await ethers.provider.send("evm_increaseTime", [
      constants.time.stackDuration,
    ]);
    await ethers.provider.send("evm_mine", []);
    await stackFactory.unstack(0);

    // Staking reward should have been triggered
    await expect(await treasury.currentStakingFaktor()).to.be.equal(
      constants.amounts.stakingFaktor1
    );
    await expect(await rewardToken.balanceOf(treasury.address)).to.be.equal(
      constants.amounts.firstBidAfterStaking
    );
    await stakingToken
      .connect(alice)
      .approve(treasury.address, constants.bids.firstSuccess);
    await treasury.connect(alice).unstake(constants.bids.firstSuccess);
    await expect(await rewardToken.balanceOf(alice.address)).to.be.equal(
      constants.amounts.firstBidAfterStaking
    );
    await expect(await stakingToken.totalSupply()).to.be.equal(0);
  });
});
