import { expect } from "chai";
import { ethers } from "hardhat";
import { SevenDotsToken } from "../typechain-types/SevenDotsToken";
import { SevenDotsRewardToken } from "../typechain-types/SevenDotsRewardToken";
import { SevenDotsTreasury } from "../typechain-types/SevenDotsTreasury";
import { SevenDotsAuctionHouse } from "../typechain-types/SevenDotsAuctionHouse";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import deployContracts from "./helper/deployContracts";
import { MaticWETH } from "../typechain-types/MaticWETH";
import constants from "./helper/constants";

describe("Treasury", function () {
  let auctionHouse: SevenDotsAuctionHouse,
    rewardToken: SevenDotsRewardToken,
    treasury: SevenDotsTreasury,
    WETH: MaticWETH;
  let deployer: SignerWithAddress,
    alice: SignerWithAddress,
    bob: SignerWithAddress;

  beforeEach(async () => {
    [deployer, alice, bob] = await ethers.getSigners();
    ({ rewardToken, auctionHouse, WETH, treasury } = await deployContracts());
  });

  it("Should withdraw from treasury and receive share of WETH", async function () {
    await WETH.mint(treasury.address, constants.amounts.ten);
    await rewardToken.mint(alice.address, constants.amounts.stackReward);
    await rewardToken.mint(alice.address, constants.amounts.stackReward);

    // Alice should have half of the share
    await rewardToken
      .connect(alice)
      .approve(treasury.address, constants.amounts.stackReward);
    await treasury.connect(alice).withdraw(constants.amounts.stackReward);
    await expect(await WETH.balanceOf(treasury.address)).to.equal(
      constants.amounts.five
    );
    await expect(await WETH.balanceOf(alice.address)).to.equal(
      constants.amounts.five
    );
    await expect(await rewardToken.balanceOf(alice.address)).to.equal(
      constants.amounts.stackReward
    );
  });

  it("Should not withdraw when no tokens", async function () {
    await rewardToken
      .connect(alice)
      .approve(treasury.address, constants.amounts.stackReward);
    await expect(
      treasury.connect(alice).withdraw(constants.amounts.stackReward)
    ).to.be.reverted;
  });

  it("Should not withdraw when not approved", async function () {
    await rewardToken.mint(alice.address, constants.amounts.stackReward);

    await expect(
      treasury.connect(alice).withdraw(constants.amounts.stackReward)
    ).to.be.reverted;
  });

  it("Last one can withdraw everything", async function () {
    await WETH.mint(treasury.address, constants.amounts.ten);

    await rewardToken.mint(alice.address, constants.amounts.stackReward);

    await rewardToken
      .connect(alice)
      .approve(treasury.address, constants.amounts.stackReward);
    await treasury.connect(alice).withdraw(constants.amounts.stackReward);
    await expect(await WETH.balanceOf(treasury.address)).to.equal(0);
    await expect(await WETH.balanceOf(alice.address)).to.equal(
      constants.amounts.ten
    );
    await expect(await rewardToken.balanceOf(alice.address)).to.equal(0);
  });

  it("Should get treasury and rewardTokenAmount", async function () {
    await WETH.mint(treasury.address, constants.amounts.ten);
    await rewardToken.mint(alice.address, constants.amounts.five);
    await rewardToken.mint(bob.address, constants.amounts.five);
    await expect(await treasury.treasuryAmount()).to.equal(
      constants.amounts.ten
    );
    await expect(await treasury.rewardTokenSupply()).to.equal(
      constants.amounts.ten
    );
  });
});
