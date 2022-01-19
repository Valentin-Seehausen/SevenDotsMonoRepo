import { ethers, upgrades } from "hardhat";
import { SevenDotsMetadata } from "../../typechain-types/SevenDotsMetadata";
import { SevenDotsToken } from "../../typechain-types/SevenDotsToken";
import { SevenDotsRewardToken } from "../../typechain-types/SevenDotsRewardToken";
import { SevenDotsStakingToken } from "../../typechain-types/SevenDotsStakingToken";
import { SevenDotsTreasury } from "../../typechain-types/SevenDotsTreasury";
import { SevenDotsAuctionHouse } from "../../typechain-types/SevenDotsAuctionHouse";
import { SevenDotsStackFactory } from "../../typechain-types/SevenDotsStackFactory";
import { SevenDotsDistributor } from "../../typechain-types/SevenDotsDistributor";
import { MaticWETH } from "../../typechain-types/MaticWETH";

let token: SevenDotsToken,
  metadata: SevenDotsMetadata,
  auctionHouse: SevenDotsAuctionHouse,
  stackFactory: SevenDotsStackFactory,
  rewardToken: SevenDotsRewardToken,
  stakingToken: SevenDotsStakingToken,
  distributor: SevenDotsDistributor,
  treasury: SevenDotsTreasury;
let WETH: MaticWETH;

interface deployContractReturnObject {
  token: SevenDotsToken;
  metadata: SevenDotsMetadata;
  auctionHouse: SevenDotsAuctionHouse;
  stackFactory: SevenDotsStackFactory;
  rewardToken: SevenDotsRewardToken;
  stakingToken: SevenDotsStakingToken;
  treasury: SevenDotsTreasury;
  distributor: SevenDotsDistributor;
  WETH: MaticWETH;
}

export default async function deployContracts(): Promise<deployContractReturnObject> {
  let [deployer] = await ethers.getSigners();

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
  await rewardToken.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    auctionHouse.address
  );
  await rewardToken.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    stackFactory.address
  );
  await stakingToken.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_ROLE")),
    treasury.address
  );
  await treasury.grantRole(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("TRIGGER_ROLE")),
    stackFactory.address
  );

  WETH = (await (
    await ethers.getContractFactory("MaticWETH")
  ).deploy(deployer.address)) as MaticWETH;

  await auctionHouse.setWETH(WETH.address);
  await treasury.setWETH(WETH.address);
  await distributor.setWETH(WETH.address);

  return {
    metadata,
    token,
    rewardToken,
    stakingToken,
    treasury,
    distributor,
    auctionHouse,
    stackFactory,
    WETH,
  };
}
