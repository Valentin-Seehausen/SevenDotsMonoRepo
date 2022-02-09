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

describe("Auction", function () {
  let auctionHouse: SevenDotsAuctionHouse,
    rewardToken: SevenDotsRewardToken,
    treasury: SevenDotsTreasury,
    token: SevenDotsToken,
    WETH: MaticWETH;
  let deployer: SignerWithAddress,
    alice: SignerWithAddress,
    bob: SignerWithAddress;

  beforeEach(async () => {
    [deployer, alice, bob] = await ethers.getSigners();
    ({ rewardToken, auctionHouse, WETH, token, treasury } =
      await deployContracts());
  });

  it("Creates Auction, receive bid, after a day slot should be free again", async function () {
    await expect(await auctionHouse.freeAuctionSlots()).to.equal(196);
    await auctionHouse.createAuction();
    await expect(await auctionHouse.freeAuctionSlots()).to.equal(195);

    // Receive Bid
    await WETH.mint(alice.address, constants.bids.firstSuccess);
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );
    await auctionHouse
      .connect(alice)
      .bidOnAuction(0, constants.bids.firstSuccess);

    // increase time
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);
    await expect(await auctionHouse.freeAuctionSlots()).to.equal(195);
  });

  it("Fill Auctions", async function () {
    await expect(await auctionHouse.freeAuctionSlots()).to.equal(196);
    for (let i = 176; i > 0; i -= 20) {
      await auctionHouse.fillAuctions();
      await expect(await auctionHouse.freeAuctionSlots()).to.equal(i);
    }
    await auctionHouse.fillAuctions();
    await expect(await auctionHouse.freeAuctionSlots()).to.equal(0);
    await expect(await auctionHouse.openAuctionCount()).to.equal(196);
  });

  it("Buy now", async function () {
    await auctionHouse.fillAuctions();
    await WETH.mint(alice.address, constants.bids.firstSuccess);
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );

    // Cannot buy now
    await expect(auctionHouse.connect(alice).buyNow(0)).to.be.reverted;

    // Move time to end auction
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Now buy now should work
    await expect(auctionHouse.connect(alice).buyNow(0)).not.to.be.reverted;
    await expect(await token.ownerOf(0)).to.be.equal(alice.address);
    await expect(await WETH.balanceOf(alice.address)).to.be.equal(
      constants.bids.startBid
    );
    await expect(await WETH.balanceOf(treasury.address)).to.be.equal(
      constants.bids.firstTreasuryReward.div(2)
    );
  });

  it("Cannot Buy now when bid", async function () {
    await auctionHouse.fillAuctions();
    await WETH.mint(alice.address, constants.bids.firstSuccess);
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );

    await auctionHouse
      .connect(alice)
      .bidOnAuction(0, constants.bids.firstSuccess);

    // Move time to end auction
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Cannot buy now
    await expect(auctionHouse.connect(alice).buyNow(0)).to.be.reverted;
  });

  xit("[LONG] Has Maximum number of auctions", async function () {
    this.timeout(300000);
    await expect(await auctionHouse.freeAuctionSlots()).to.equal(196);
    for (let i = 0; i < 196; i++) {
      await auctionHouse.createAuction();
    }
    await expect(await auctionHouse.freeAuctionSlots()).to.equal(0);
    // increase time
    await expect(auctionHouse.createAuction()).to.be.reverted;
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);
    await WETH.mint(deployer.address, constants.bids.firstSuccess);
    await WETH.approve(auctionHouse.address, constants.bids.firstSuccess);
    await auctionHouse.bidOnAuction(0, constants.bids.firstSuccess);
    await expect(auctionHouse.createAuction()).not.to.be.reverted;
  });

  it("Receives Creator Reward", async function () {
    await auctionHouse.connect(alice).createAuction();
    await expect(await rewardToken.balanceOf(alice.address)).to.equal(
      constants.amounts.auctionCreatorReward
    );
  });

  it("Returns all auctions", async function () {
    await auctionHouse.createAuction();
    await expect(await auctionHouse.openAuctions()).to.be.of.length(1);
  });

  it("Returns only non-ended and open auctions", async function () {
    //Create 2 auctions and move half a duration
    await auctionHouse.createAuction();
    await auctionHouse.createAuction();
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration * 0.5,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Bid on auction 0
    await WETH.mint(alice.address, constants.bids.firstSuccess);
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );
    await auctionHouse
      .connect(alice)
      .bidOnAuction(0, constants.bids.firstSuccess);

    // Create two auctions and move half a duration
    await auctionHouse.createAuction();
    await auctionHouse.createAuction();
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration * 0.5,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Three auctions should show up
    await expect(await auctionHouse.openAuctions()).to.be.of.length(3);
    await expect((await auctionHouse.openAuctions())[2])
      .property("id")
      .to.be.equal(3);

    // Should still receive all 4 non-redeemed auctions.
    await expect(await auctionHouse.allAuctions()).to.be.of.length(4);
  });

  it("Creates auctions, bids, ends", async function () {
    // Load balance
    await WETH.mint(alice.address, constants.bids.firstSuccess);
    await expect(await WETH.balanceOf(alice.address)).to.be.equal(
      constants.bids.firstSuccess
    );

    // Bid on auction
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );
    await expect(
      await WETH.allowance(alice.address, auctionHouse.address)
    ).to.be.equal(constants.bids.firstSuccess);
    await auctionHouse.createAuction();
    await auctionHouse
      .connect(alice)
      .bidOnAuction(0, constants.bids.firstSuccess);

    // Auction should be updated
    await expect((await auctionHouse.openAuctions())[0])
      .property("highestBid")
      .to.equal(constants.bids.firstSuccess);
    await expect((await auctionHouse.openAuctions())[0])
      .property("highestBidder")
      .to.equal(alice.address);

    // Move time to end auction
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Redeem the auction
    await auctionHouse.connect(alice).redeemAuction(0);

    // WETH should be transfered
    await expect(await WETH.balanceOf(constants.contracts.artist)).to.be.equal(
      constants.bids.firstArtistReward
    );
    await expect(await WETH.balanceOf(treasury.address)).to.be.equal(
      constants.bids.firstTreasuryReward
    );

    // NFT should be transfered and have the right seed
    await expect(await token.balanceOf(alice.address)).to.equal(1);
    await expect(atob((await token.tokenURI(0)).substring(29))).to.equal(
      constants.tokenURI[0]
    );

    // DotCount should have been increased
    await expect(await token.totalDotCount()).to.be.equal(1);

    // Auction should be closed
    await expect(await auctionHouse.allAuctionsCount()).to.be.equal(0);
  });

  it("Refuses bids that are too low or not increase enough", async function () {
    // Load balance
    await WETH.mint(alice.address, constants.bids.lowBid);
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.lowBid
    );
    await auctionHouse.createAuction();

    await expect(
      auctionHouse.connect(alice).bidOnAuction(0, constants.bids.startBid)
    ).to.be.reverted;
    await expect(
      auctionHouse.connect(alice).bidOnAuction(0, constants.bids.lowBid)
    ).to.be.reverted;
  });

  it("Need sufficient balance", async function () {
    // Load balance
    await WETH.mint(alice.address, constants.bids.lowBid);
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );
    await auctionHouse.createAuction();

    await expect(
      auctionHouse.connect(alice).bidOnAuction(0, constants.bids.firstSuccess)
    ).to.be.reverted;
  });

  it("Can only redeem ended auction", async function () {
    // Load balance
    await WETH.mint(alice.address, constants.bids.firstSuccess);
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );
    await auctionHouse.createAuction();

    await auctionHouse
      .connect(alice)
      .bidOnAuction(0, constants.bids.firstSuccess);

    // Auction did not end yet.
    await expect(auctionHouse.connect(alice).redeemAuction(0)).to.be.reverted;

    // Move time to end auction
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Should work now
    await expect(auctionHouse.connect(alice).redeemAuction(0)).not.to.be
      .reverted;
  });

  it("Can only redeem own auction", async function () {
    // Load balance
    await WETH.mint(alice.address, constants.bids.firstSuccess);
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );
    await auctionHouse.createAuction();

    await auctionHouse
      .connect(alice)
      .bidOnAuction(0, constants.bids.firstSuccess);

    // Move time to end auction
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Bob cannot redeem Alice's auction
    await expect(auctionHouse.connect(bob).redeemAuction(0)).to.be.reverted;

    // Alice can.
    await expect(auctionHouse.connect(alice).redeemAuction(0)).not.to.be
      .reverted;
  });

  it("Old highestBidder gets tokens back", async function () {
    // Load balances of Alice
    await WETH.mint(alice.address, constants.bids.firstSuccess);

    // Load balances of Bob
    await WETH.mint(bob.address, constants.bids.secondSuccess);

    await auctionHouse.createAuction();

    // Alice bids
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );
    await auctionHouse
      .connect(alice)
      .bidOnAuction(0, constants.bids.firstSuccess);
    // Alice has no WETH
    await expect(await WETH.balanceOf(alice.address)).to.equal(0);

    // Bob overbids Alice
    await WETH.connect(bob).approve(
      auctionHouse.address,
      constants.bids.secondSuccess
    );
    await auctionHouse
      .connect(bob)
      .bidOnAuction(0, constants.bids.secondSuccess);

    // Alice should have the WETH back
    await expect(await WETH.balanceOf(alice.address)).to.equal(
      constants.bids.firstSuccess
    );
  });

  it("Owner can clean auction", async function () {
    // Load balance
    await WETH.mint(alice.address, constants.bids.firstSuccess);
    await WETH.connect(alice).approve(
      auctionHouse.address,
      constants.bids.firstSuccess
    );
    await auctionHouse.createAuction();

    await auctionHouse
      .connect(alice)
      .bidOnAuction(0, constants.bids.firstSuccess);

    // Move time to end auction plus a week
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Alice will not redeem auction, so it will be cleaned by Owner
    await auctionHouse.cleanAuction(0);

    // RewardTokens should be transfered
    await expect(await WETH.balanceOf(constants.contracts.artist)).to.be.equal(
      constants.bids.firstArtistReward
    );
    await expect(await WETH.balanceOf(treasury.address)).to.be.equal(
      constants.bids.firstTreasuryReward
    );

    // NFT should be transfered and have the right seed
    await expect(await token.balanceOf(alice.address)).to.equal(1);
    await expect(atob((await token.tokenURI(0)).substring(29))).to.equal(
      constants.tokenURI[0]
    );
  });

  it("Pruning works correctly", async function () {
    // Mint token
    await WETH.mint(deployer.address, constants.amounts.million);
    await WETH.approve(auctionHouse.address, constants.amounts.million);

    //Create 2 auctions, bid on 0 and move one duration
    await auctionHouse.createAuction(); // # 0
    await auctionHouse.createAuction(); // # 1
    await auctionHouse.bidOnAuction(0, constants.bids.firstSuccess);
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    //Create 2 auctions, bid on 2 and 3 and move one duration
    await auctionHouse.createAuction(); // # 2
    await auctionHouse.createAuction(); // # 3
    await auctionHouse.bidOnAuction(2, constants.bids.firstSuccess);
    await auctionHouse.bidOnAuction(3, constants.bids.firstSuccess);
    await ethers.provider.send("evm_increaseTime", [
      constants.time.auctionDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // Create two auctions
    await auctionHouse.createAuction(); // # 4
    await auctionHouse.createAuction(); // # 5

    // Three auctions should show up
    await expect(await auctionHouse.openAuctions()).to.be.of.length(3);
    await expect(await auctionHouse.closedAuctions()).to.be.of.length(3);
    await expect(await auctionHouse.allAuctions()).to.be.of.length(6);
    await expect((await auctionHouse.openAuctions())[0])
      .property("id")
      .to.be.equal(1);
    await expect((await auctionHouse.openAuctions())[1])
      .property("id")
      .to.be.equal(4);
    await expect((await auctionHouse.openAuctions())[2])
      .property("id")
      .to.be.equal(5);
    await auctionHouse.redeemAuction(0);
    await expect(await auctionHouse.closedAuctions()).to.be.of.length(2);
    await expect((await auctionHouse.closedAuctions())[0])
      .property("id")
      .to.be.equal(3);
  });
});
