import { expect } from "chai";
import { ethers } from "hardhat";
import { SevenDotsMetadata } from "../typechain-types/SevenDotsMetadata";
import deployContracts from "./helper/deployContracts";

describe("Decode", function () {
  let metadata: SevenDotsMetadata;
  beforeEach(async () => {
    ({ metadata } = await deployContracts());
  });
  it("Full DNA", async function () {
    const bytes = await metadata.encode([
      ethers.BigNumber.from("1234561"),
      ethers.BigNumber.from("2345612"),
      ethers.BigNumber.from("3456123"),
      ethers.BigNumber.from("4561234"),
      ethers.BigNumber.from("5612345"),
      ethers.BigNumber.from("6123456"),
      ethers.BigNumber.from("1234567"),
    ]);
    const cols = await metadata.decode(bytes);
    await expect(cols).to.deep.equal([
      ethers.BigNumber.from("1234561"),
      ethers.BigNumber.from("2345612"),
      ethers.BigNumber.from("3456123"),
      ethers.BigNumber.from("4561234"),
      ethers.BigNumber.from("5612345"),
      ethers.BigNumber.from("6123456"),
      ethers.BigNumber.from("1234567"),
    ]);
  });

  it("Simple DNA", async function () {
    const bytes = await metadata.encode([
      ethers.BigNumber.from("0000000"),
      ethers.BigNumber.from("0000000"),
      ethers.BigNumber.from("0000000"),
      ethers.BigNumber.from("0000001"),
      ethers.BigNumber.from("0000000"),
      ethers.BigNumber.from("0000000"),
      ethers.BigNumber.from("0000000"),
    ]);
    const cols = await metadata.decode(bytes);
    await expect(cols).to.deep.equal([
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("1"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
    ]);
  });

  it("Does not overflow", async function () {
    const bytes = await metadata.encode([
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
    ]);
    const cols = await metadata.decode(bytes);
    await expect(cols).to.deep.equal([
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
      ethers.BigNumber.from("7777777"),
    ]);
  });

  it("Get length of col", async function () {
    await expect(await metadata.getLength("0")).to.equal(0);
    await expect(await metadata.getLength("123")).to.equal(3);
    await expect(await metadata.getLength("1234567")).to.equal(7);
  });

  it("Adds cols", async function () {
    await expect(await metadata.addCols("0", "1")).to.equal("1");
    await expect(await metadata.addCols("12", "345")).to.equal("34512");
    await expect(await metadata.addCols("123456", "789")).to.equal("9123456");
  });

  it("Reverts when wrong array length", async function () {
    expect(
      metadata.encode([
        ethers.BigNumber.from("1"),
        ethers.BigNumber.from("2"),
        ethers.BigNumber.from("3"),
        ethers.BigNumber.from("4"),
        ethers.BigNumber.from("5"),
        ethers.BigNumber.from("6"),
      ])
    ).to.be.reverted;
    expect(
      metadata.encode([
        ethers.BigNumber.from("1"),
        ethers.BigNumber.from("2"),
        ethers.BigNumber.from("3"),
        ethers.BigNumber.from("4"),
        ethers.BigNumber.from("5"),
        ethers.BigNumber.from("6"),
        ethers.BigNumber.from("7"),
        ethers.BigNumber.from("8"),
      ])
    ).to.be.reverted;
  });
});
