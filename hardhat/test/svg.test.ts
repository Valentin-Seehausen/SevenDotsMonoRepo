import { expect } from "chai";
import { ethers } from "hardhat";
import { SevenDotsMetadata } from "../typechain-types/SevenDotsMetadata";
import constants from "./helper/constants";

describe("SevenDotsMetadata", function () {
  it("Generates SVG", async function () {
    const metadata = (await (
      await ethers.getContractFactory("SevenDotsMetadata")
    ).deploy()) as SevenDotsMetadata;
    const bytes = await metadata.encode([
      ethers.BigNumber.from("1"),
      ethers.BigNumber.from("222"),
      ethers.BigNumber.from("33333"),
      ethers.BigNumber.from("4444444"),
      ethers.BigNumber.from("55555"),
      ethers.BigNumber.from("666666"),
      ethers.BigNumber.from("0"),
    ]);

    const svg = await metadata.calcSvg(bytes);
    await expect(svg).to.equal(constants.svg.fullSpectrum);
  });

  it("Get Dots", async function () {
    const metadata = await (
      await ethers.getContractFactory("SevenDotsMetadata")
    ).deploy();
    const bytes = await metadata.encode([
      ethers.BigNumber.from("0000001"),
      ethers.BigNumber.from("0000000"),
      ethers.BigNumber.from("0000000"),
      ethers.BigNumber.from("0000001"),
      ethers.BigNumber.from("0000000"),
      ethers.BigNumber.from("0000000"),
      ethers.BigNumber.from("0000000"),
    ]);
    expect(await metadata.getDots(bytes)).to.equal(
      "<rect class='c1' x='60' y='330' width='60' height='60'/>" +
        "<rect class='c1' x='330' y='330' width='60' height='60'/>"
    );
  });

  it("Get Rect", async function () {
    const metadata = await (
      await ethers.getContractFactory("SevenDotsMetadata")
    ).deploy();

    expect(await metadata.getRect(1, 2, 3)).to.equal(
      "<rect class='c3' x='1' y='2' width='60' height='60'/>"
    );
  });

  it("Get Color", async function () {
    const metadata = await (
      await ethers.getContractFactory("SevenDotsMetadata")
    ).deploy();

    expect(await metadata.getColor(1, 0)).to.equal(1);
    expect(await metadata.getColor(123, 1)).to.equal(2);
    expect(await metadata.getColor(1234567, 6)).to.equal(7);
  });

  it("Get Col Dots", async function () {
    const metadata = await (
      await ethers.getContractFactory("SevenDotsMetadata")
    ).deploy();

    expect(await metadata.getColDots(1, 0)).to.equal(
      "<rect class='c1' x='60' y='330' width='60' height='60'/>"
    );

    expect(await metadata.getColDots(12, 1)).to.equal(
      "<rect class='c1' x='150' y='270' width='60' height='60'/>" +
        "<rect class='c2' x='150' y='360' width='60' height='60'/>"
    );
    expect(await metadata.getColDots(123, 2)).to.equal(
      "<rect class='c1' x='240' y='240' width='60' height='60'/>" +
        "<rect class='c2' x='240' y='330' width='60' height='60'/>" +
        "<rect class='c3' x='240' y='420' width='60' height='60'/>"
    );
    expect(await metadata.getColDots(123456, 2)).to.equal(
      "<rect class='c1' x='240' y='90' width='60' height='60'/>" +
        "<rect class='c2' x='240' y='180' width='60' height='60'/>" +
        "<rect class='c3' x='240' y='270' width='60' height='60'/>" +
        "<rect class='c4' x='240' y='360' width='60' height='60'/>" +
        "<rect class='c5' x='240' y='450' width='60' height='60'/>" +
        "<rect class='c6' x='240' y='540' width='60' height='60'/>"
    );
    expect(await metadata.getColDots(1234567, 6)).to.equal(
      "<rect class='c1' x='600' y='60' width='60' height='60'/>" +
        "<rect class='c2' x='600' y='150' width='60' height='60'/>" +
        "<rect class='c3' x='600' y='240' width='60' height='60'/>" +
        "<rect class='c4' x='600' y='330' width='60' height='60'/>" +
        "<rect class='c5' x='600' y='420' width='60' height='60'/>" +
        "<rect class='c6' x='600' y='510' width='60' height='60'/>" +
        "<rect class='c7' x='600' y='600' width='60' height='60'/>"
    );
  });
});
