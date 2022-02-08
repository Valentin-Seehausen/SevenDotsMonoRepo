import { ethers, upgrades } from "hardhat";
import { SevenDotsMetadata } from "../../../typechain-types/SevenDotsMetadata";
import { SevenDotsToken } from "../../../typechain-types/SevenDotsToken";
import { SevenDotsRewardToken } from "../../../typechain-types/SevenDotsRewardToken";
import { SevenDotsStakingToken } from "../../../typechain-types/SevenDotsStakingToken";
import { SevenDotsTreasury } from "../../../typechain-types/SevenDotsTreasury";
import { SevenDotsAuctionHouse } from "../../../typechain-types/SevenDotsAuctionHouse";
import { SevenDotsStackFactory } from "../../../typechain-types/SevenDotsStackFactory";
import { SevenDotsDistributor } from "../../../typechain-types/SevenDotsDistributor";
import { MaticWETH } from "../../../typechain-types/MaticWETH";
import addresses from "../../../../deployments/137/current/addresses.json";

let distributor: SevenDotsDistributor;

interface deployContractReturnObject {
  distributor: string;
}

export default async function updateContracts() {
  let [deployer] = await ethers.getSigners();

  await upgrades.upgradeProxy(
    addresses.SevenDotsMetadata,
    await ethers.getContractFactory("SevenDotsMetadata")
  );

  await upgrades.upgradeProxy(
    addresses.SevenDotsAuctionHouse,
    await ethers.getContractFactory("SevenDotsAuctionHouse")
  );

}

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Updating Contracts contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  console.log("Upgrading...");
  await updateContracts();

  console.log("Successfully upgraded! Addresses:");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
