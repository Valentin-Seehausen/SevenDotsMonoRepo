import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import { ethers } from "hardhat";
import { SevenDotsStackFactory } from "../typechain-types/SevenDotsStackFactory";
import { SevenDotsToken } from "../typechain-types/SevenDotsToken";
import constants from "./helper/constants";
import deployContracts from "./helper/deployContracts";

describe("Mint NFT Token", function () {
  let token: SevenDotsToken, stackFactory: SevenDotsStackFactory;
  let deployer: SignerWithAddress, alice: SignerWithAddress;

  beforeEach(async () => {
    [deployer, alice] = await ethers.getSigners();
    ({ stackFactory, token } = await deployContracts());
  });

  it("Mints a NFT", async function () {
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await expect(await token.balanceOf(deployer.address)).to.equal(1);
  });

  it("TokenURI of rare rainbow two", async function () {
    await token.safeMint(deployer.address, constants.seed.rareRainbowTwo);
    await expect(atob((await token.tokenURI(0)).substring(29))).to.equal(
      constants.tokenURI.rareRainbowTwo
    );
  });

  it("TokenURI of rare rainbow seven", async function () {
    await token.safeMint(deployer.address, constants.seed.rareRainbowSeven);
    await expect(atob((await token.tokenURI(0)).substring(29))).to.equal(
      constants.tokenURI.rareRainbowSeven
    );
  });

  it("TokenURI of common rainbow one", async function () {
    await token.safeMint(deployer.address, constants.seed.commonRainbowOne);
    await expect(atob((await token.tokenURI(0)).substring(29))).to.equal(
      constants.tokenURI.commonRainbowOne
    );
  });

  it("Reverts unauthorized minting", async function () {
    await expect(
      token.connect(alice).safeMint(alice.address, constants.seed.f4c1)
    ).to.be.revertedWith(
      "AccessControl: account 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 is missing role 0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"
    );
  });

  it("Returns tokenURI", async function () {
    await token.safeMint(deployer.address, constants.seed.f4c1);
    await expect(atob((await token.tokenURI(0)).substring(29))).to.equal(
      constants.tokenURI.f4c1
    );
  });

  it("Dot Count works", async function () {
    await token.safeMint(deployer.address, constants.seed.rareRainbowTwo);
    await token.safeMint(deployer.address, constants.seed.rareRainbowSix);
    await expect(await token.totalDotCount()).to.be.equal(56);
    await token.approve(stackFactory.address, 0);
    await token.approve(stackFactory.address, 1);
    await stackFactory.stackTokens(0, 1);

    // increase time
    await ethers.provider.send("evm_increaseTime", [
      constants.time.stackDuration,
    ]);
    await ethers.provider.send("evm_mine", []);

    // now unstack should work
    await stackFactory.unstack(0);
    await expect(await token.totalDotCount()).to.be.equal(49);
  });
});
