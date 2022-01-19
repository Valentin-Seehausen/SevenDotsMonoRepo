import { expect } from "chai";
import { ethers } from "hardhat";
import { SevenDotsMetadata } from "../typechain-types/SevenDotsMetadata";
import { SevenDotsAuctionHouse } from "../typechain-types/SevenDotsAuctionHouse";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import deployContracts from "./helper/deployContracts";

describe("Attribute Creation", function () {
  let metadata: SevenDotsMetadata, auctionHouse: SevenDotsAuctionHouse;
  let deployer: SignerWithAddress, alice: SignerWithAddress;

  beforeEach(async () => {
    [deployer, alice] = await ethers.getSigners();
    ({ metadata, auctionHouse } = await deployContracts());
  });

  it("Generates Field", async function () {
    await expect(await auctionHouse.generateField(0)).to.equal(1);
    await expect(await auctionHouse.generateField(27)).to.equal(1);
    await expect(await auctionHouse.generateField(28)).to.equal(2);
    await expect(await auctionHouse.generateField(56)).to.equal(3);
    await expect(await auctionHouse.generateField(195)).to.equal(7);
    await expect(await auctionHouse.generateField(196)).to.equal(1);
    await expect(await auctionHouse.generateField(1959)).to.equal(7);
    await expect(await auctionHouse.generateField(1960)).to.equal(1);
  });

  it("Generates Color", async function name() {
    await expect(await auctionHouse.generateColor(0)).to.equal(1);
    await expect(await auctionHouse.generateColor(1)).to.equal(2);
    await expect(await auctionHouse.generateColor(2)).to.equal(2);
    await expect(await auctionHouse.generateColor(3)).to.equal(3);
    await expect(await auctionHouse.generateColor(5)).to.equal(3);
    await expect(await auctionHouse.generateColor(6)).to.equal(4);
    await expect(await auctionHouse.generateColor(9)).to.equal(4);
    await expect(await auctionHouse.generateColor(10)).to.equal(5);
    await expect(await auctionHouse.generateColor(14)).to.equal(5);
    await expect(await auctionHouse.generateColor(15)).to.equal(6);
    await expect(await auctionHouse.generateColor(20)).to.equal(6);
    await expect(await auctionHouse.generateColor(21)).to.equal(7);
    await expect(await auctionHouse.generateColor(27)).to.equal(7);

    // Field 2 -> Shift Color up by 1
    await expect(await auctionHouse.generateColor(28)).to.equal(2);
    await expect(await auctionHouse.generateColor(49)).to.equal(1);

    // Field 7 -> Shift Color up by 6
    await expect(await auctionHouse.generateColor(168)).to.equal(7);
    await expect(await auctionHouse.generateColor(168)).to.equal(7);
    await expect(await auctionHouse.generateColor(195)).to.equal(6);

    // Field 1 again
    await expect(await auctionHouse.generateColor(196)).to.equal(1);
  });

  it("Generates Seed", async function name() {
    await expect(await auctionHouse.generateSeed(0)).to.equal(
      await metadata.encode([1, 0, 0, 0, 0, 0, 0])
    );
    await expect(await auctionHouse.generateSeed(14)).to.equal(
      await metadata.encode([5, 0, 0, 0, 0, 0, 0])
    );
    await expect(await auctionHouse.generateSeed(28)).to.equal(
      await metadata.encode([0, 2, 0, 0, 0, 0, 0])
    );
    await expect(await auctionHouse.generateSeed(196)).to.equal(
      await metadata.encode([1, 0, 0, 0, 0, 0, 0])
    );
    await expect(await auctionHouse.generateSeed(1959)).to.equal(
      await metadata.encode([0, 0, 0, 0, 0, 0, 6])
    );
  });
});
