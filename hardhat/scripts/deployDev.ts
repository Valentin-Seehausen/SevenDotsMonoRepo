import { ethers, upgrades } from "hardhat";
import { SevenDotsMetadata } from "../typechain-types/SevenDotsMetadata";
import { SevenDotsToken } from "../typechain-types/SevenDotsToken";
import { SevenDotsRewardToken } from "../typechain-types/SevenDotsRewardToken";
import { SevenDotsStakingToken } from "../typechain-types/SevenDotsStakingToken";
import { SevenDotsTreasury } from "../typechain-types/SevenDotsTreasury";
import { SevenDotsAuctionHouse } from "../typechain-types/SevenDotsAuctionHouse";
import { SevenDotsStackFactory } from "../typechain-types/SevenDotsStackFactory";
import { SevenDotsDistributor } from "../typechain-types/SevenDotsDistributor";
import { MaticWETH } from "../typechain-types/MaticWETH";
import fs from "fs";
import path from "path";
import constants from "../test/helper/constants";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

let token: SevenDotsToken,
  metadata: SevenDotsMetadata,
  auctionHouse: SevenDotsAuctionHouse,
  stackFactory: SevenDotsStackFactory,
  rewardToken: SevenDotsRewardToken,
  stakingToken: SevenDotsStakingToken,
  distributor: SevenDotsDistributor,
  treasury: SevenDotsTreasury;
let WETH: MaticWETH;
let deployer: SignerWithAddress, alice: SignerWithAddress;

interface contractAddresses {
  SevenDotsToken: string;
  SevenDotsMetadata: string;
  SevenDotsAuctionHouse: string;
  SevenDotsStackFactory: string;
  SevenDotsRewardToken: string;
  SevenDotsStakingToken: string;
  SevenDotsDistributor: string;
  SevenDotsTreasury: string;
  MaticWETH: string;
}

export default async function deployContracts(): Promise<contractAddresses> {
  [deployer, alice] = await ethers.getSigners();

  metadata = (await upgrades.deployProxy(
    await ethers.getContractFactory("SevenDotsMetadata"),
    {
      kind: "uups",
    }
  )) as SevenDotsMetadata;

  token = (await upgrades.deployProxy(
    await ethers.getContractFactory("SevenDotsToken"),
    [metadata.address],
    { kind: "uups" }
  )) as SevenDotsToken;

  rewardToken = (await upgrades.deployProxy(
    await ethers.getContractFactory("SevenDotsRewardToken"),
    { kind: "uups" }
  )) as SevenDotsRewardToken;

  stakingToken = (await upgrades.deployProxy(
    await ethers.getContractFactory("SevenDotsStakingToken"),
    { kind: "uups" }
  )) as SevenDotsStakingToken;

  treasury = (await upgrades.deployProxy(
    await ethers.getContractFactory("SevenDotsTreasury"),
    [rewardToken.address, stakingToken.address],
    { kind: "uups" }
  )) as SevenDotsTreasury;

  distributor = (await upgrades.deployProxy(
    await ethers.getContractFactory("SevenDotsDistributor"),
    [treasury.address],
    { kind: "uups" }
  )) as SevenDotsDistributor;

  auctionHouse = (await upgrades.deployProxy(
    await ethers.getContractFactory("SevenDotsAuctionHouse"),
    [token.address, rewardToken.address, treasury.address, metadata.address],
    { kind: "uups" }
  )) as SevenDotsAuctionHouse;

  stackFactory = (await upgrades.deployProxy(
    await ethers.getContractFactory("SevenDotsStackFactory"),
    [token.address, rewardToken.address, treasury.address, metadata.address],
    { kind: "uups" }
  )) as SevenDotsStackFactory;

  await token.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    auctionHouse.address
  );
  await token.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    stackFactory.address
  );
  await token.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    deployer.address
  );
  await rewardToken.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    auctionHouse.address
  );
  await rewardToken.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    stackFactory.address
  );
  await rewardToken.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    deployer.address
  );
  await stakingToken.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    treasury.address
  );
  await treasury.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("TRIGGER_ROLE")),
    stackFactory.address
  );
  await treasury.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("TRIGGER_ROLE")),
    deployer.address
  );

  WETH = (await (
    await ethers.getContractFactory("MaticWETH")
  ).deploy(deployer.address)) as MaticWETH;

  await auctionHouse.setWETH(WETH.address);
  await treasury.setWETH(WETH.address);
  await distributor.setWETH(WETH.address);

  // Return Addresses:
  return {
    SevenDotsToken: token.address,
    SevenDotsMetadata: metadata.address,
    SevenDotsAuctionHouse: auctionHouse.address,
    SevenDotsStackFactory: stackFactory.address,
    SevenDotsRewardToken: rewardToken.address,
    SevenDotsStakingToken: stakingToken.address,
    SevenDotsDistributor: distributor.address,
    SevenDotsTreasury: treasury.address,
    MaticWETH: WETH.address,
  };
}

async function writeAddresses(addresses: contractAddresses, chainId: Number) {
  // Constants
  const timestamp = Math.floor(Date.now() / 1000);
  const _dirCurrent = path.join(
    __dirname,
    "../../deployments/",
    chainId.toString(),
    "current"
  );
  const _dir = path.join(
    __dirname,
    "../../deployments/",
    chainId.toString(),
    timestamp.toString()
  );
  const _filename = "addresses.json";
  const _path = path.join(_dir, _filename);
  console.log("creating dir ", path.join(_dir, "abis"));

  // Create new dir
  await fs.mkdirSync(path.join(_dir, "abis"), { recursive: true });
  await fs.mkdirSync(path.join(_dir, "types"), { recursive: true });

  let addressesJson = JSON.parse("{}");
  // All promises go in here to be solved sync
  let copyJobs = [];

  // Each contract
  for (const [name, address] of Object.entries(addresses)) {
    console.log(name, address);
    addressesJson[name] = address;
    copyJobs.push(
      // Copy ABI
      fs.copyFileSync(
        path.join(
          __dirname,
          "../artifacts/contracts/" + name + ".sol/" + name + ".json"
        ), //sourc
        path.join(_dir, "abis", name + ".json") // destination
      )
    );
    // Copy Types
    copyJobs.push(
      fs.copyFileSync(
        path.join(__dirname, "../typechain-types/" + name + ".ts"), //sourc
        path.join(_dir, "types", name + ".ts") // destination
      )
    );
  }

  copyJobs.push(fs.writeFileSync(_path, JSON.stringify(addressesJson)));
  await Promise.all(copyJobs);
  try {
    await fs.unlinkSync(_dirCurrent);
  } catch {}
  await fs.symlinkSync(_dir, _dirCurrent, "dir");
  console.log("Saved in file:", _path);
}

async function seedFixtures() {
  await auctionHouse.connect(alice).createAuction();
  await auctionHouse.connect(alice).createAuction();
  await auctionHouse.connect(alice).createAuction();
  await auctionHouse.connect(alice).createAuction();
  await auctionHouse.connect(alice).createAuction();
  await auctionHouse.connect(alice).createAuction();
  await token.safeMint(alice.address, constants.seed.commonRainbowOne);
  await token.safeMint(alice.address, constants.seed.rareRainbowFive);
  await token.safeMint(alice.address, constants.seed.rareRainbowFive);
  await token.safeMint(alice.address, constants.seed.rareRainbowSix);
  await token.safeMint(alice.address, constants.seed.rareRainbowTwo);
  await token.safeMint(alice.address, constants.seed.rareRainbowTwo);
  await WETH.transfer(alice.address, constants.amounts.ten);
  await WETH.transfer(treasury.address, constants.amounts.ten);
  await rewardToken.mint(alice.address, constants.amounts.ten);
  await rewardToken.mint(deployer.address, constants.amounts.ten);
  await stakingToken.mint(alice.address, constants.amounts.ten);
  await stakingToken.mint(deployer.address, constants.amounts.ten);
  await token.connect(alice).setApprovalForAll(stackFactory.address, true);
  await WETH.connect(alice).approve(
    auctionHouse.address,
    ethers.utils.parseEther("10000000000")
  );
  await rewardToken
    .connect(alice)
    .approve(treasury.address, ethers.utils.parseEther("10000000000"));
  await stakingToken
    .connect(alice)
    .approve(treasury.address, ethers.utils.parseEther("10000000000"));
}

async function main() {
  const [deployer] = await ethers.getSigners();
  let networkData = await (deployer as any).provider.getNetwork();

  console.log("Chain ID:", networkData.chainId);
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  console.log("Deploying...");
  const contracts = await deployContracts();
  await writeAddresses(contracts, networkData.chainId);

  console.log("Successfully deployed! ");

  console.log("Seeding fixtures...");
  await seedFixtures();
  console.log("Successfully seeded fixtures.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
