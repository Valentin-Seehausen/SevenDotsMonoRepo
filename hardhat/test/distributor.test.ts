import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { SevenDotsTreasury } from "../typechain-types/SevenDotsTreasury";
import deployContracts from "./helper/deployContracts";
import { MaticWETH } from "../typechain-types/MaticWETH";
import constants from "./helper/constants";
import { SevenDotsDistributor } from "../typechain-types/SevenDotsDistributor";

describe("Distributor", function () {
  let distributor: SevenDotsDistributor,
    treasury: SevenDotsTreasury,
    WETH: MaticWETH;

  beforeEach(async () => {
    ({ distributor, treasury, WETH } = await deployContracts());
  });

  it("Should distribute WETH", async function () {
    await WETH.mint(distributor.address, constants.amounts.ten);
    await distributor.distribute();
    await expect(await WETH.balanceOf(constants.contracts.artist)).to.equal(
      constants.amounts.two
    );
    await expect(await WETH.balanceOf(treasury.address)).to.equal(
      constants.amounts.eight
    );
  });

  it("Can get updated and send another ratio", async function () {
    await upgrades.upgradeProxy(
      distributor.address,
      await ethers.getContractFactory("TestDistributorUpgrade")
    );
    await WETH.mint(distributor.address, constants.amounts.ten);
    await distributor.distribute();
    await expect(await WETH.balanceOf(constants.contracts.artist)).to.equal(
      constants.amounts.one
    );
    await expect(await WETH.balanceOf(treasury.address)).to.equal(
      constants.amounts.nine
    );
  });
});
