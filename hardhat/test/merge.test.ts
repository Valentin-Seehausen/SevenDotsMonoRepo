import { expect } from "chai";
import { ethers } from "hardhat";

describe("Merge", function () {
  it("Merge DNA", async function () {
    const metadata = await (
      await ethers.getContractFactory("SevenDotsMetadata")
    ).deploy();
    const dna1 = [
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("1"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
    ];
    const dna2 = [
      ethers.BigNumber.from("1"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
    ];
    const merge = await metadata.mergeDna(dna1, dna2);
    await expect(merge).to.deep.equal([
      ethers.BigNumber.from("1"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("1"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
    ]);
  });

  it("Merge Bytes", async function () {
    const metadata = await (
      await ethers.getContractFactory("SevenDotsMetadata")
    ).deploy();
    const bytes1 = await metadata.encode([
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("21"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("4321"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("7654321"),
    ]);
    const bytes2 = await metadata.encode([
      ethers.BigNumber.from("1"),
      ethers.BigNumber.from("43"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("8765"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("1111111"),
    ]);
    const merge = await metadata.merge(bytes1, bytes2);
    const expected = await metadata.encode([
      ethers.BigNumber.from("1"),
      ethers.BigNumber.from("4321"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("7654321"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("0"),
      ethers.BigNumber.from("7654321"),
    ]);
    await expect(merge).to.deep.equal(expected);
  });
});
