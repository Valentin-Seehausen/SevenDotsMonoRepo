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
      "<rect class='c1' x='2' y='11' width='2' height='2'/>" +
        "<rect class='c1' x='11' y='11' width='2' height='2'/>"
    );
  });

  it("Get Rect", async function () {
    const metadata = await (
      await ethers.getContractFactory("SevenDotsMetadata")
    ).deploy();

    expect(await metadata.getRect(1, 2, 3)).to.equal(
      "<rect class='c3' x='1' y='2' width='2' height='2'/>"
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
      "<rect class='c1' x='2' y='11' width='2' height='2'/>"
    );

    expect(await metadata.getColDots(12, 1)).to.equal(
      "<rect class='c1' x='5' y='9' width='2' height='2'/>" +
        "<rect class='c2' x='5' y='12' width='2' height='2'/>"
    );
    expect(await metadata.getColDots(123, 2)).to.equal(
      "<rect class='c1' x='8' y='8' width='2' height='2'/>" +
        "<rect class='c2' x='8' y='11' width='2' height='2'/>" +
        "<rect class='c3' x='8' y='14' width='2' height='2'/>"
    );
    expect(await metadata.getColDots(123456, 2)).to.equal(
      "<rect class='c1' x='8' y='3' width='2' height='2'/>" +
        "<rect class='c2' x='8' y='6' width='2' height='2'/>" +
        "<rect class='c3' x='8' y='9' width='2' height='2'/>" +
        "<rect class='c4' x='8' y='12' width='2' height='2'/>" +
        "<rect class='c5' x='8' y='15' width='2' height='2'/>" +
        "<rect class='c6' x='8' y='18' width='2' height='2'/>"
    );
    expect(await metadata.getColDots(1234567, 6)).to.equal(
      "<rect class='c1' x='20' y='2' width='2' height='2'/>" +
        "<rect class='c2' x='20' y='5' width='2' height='2'/>" +
        "<rect class='c3' x='20' y='8' width='2' height='2'/>" +
        "<rect class='c4' x='20' y='11' width='2' height='2'/>" +
        "<rect class='c5' x='20' y='14' width='2' height='2'/>" +
        "<rect class='c6' x='20' y='17' width='2' height='2'/>" +
        "<rect class='c7' x='20' y='20' width='2' height='2'/>"
    );
  });
});
