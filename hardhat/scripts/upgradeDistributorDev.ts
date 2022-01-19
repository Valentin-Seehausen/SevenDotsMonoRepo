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

let distributor: SevenDotsDistributor;

interface deployContractReturnObject {
  distributor: string;
}

export default async function deployContracts(): Promise<string> {
  let [deployer] = await ethers.getSigners();

  const result = await upgrades.upgradeProxy(
    "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
    await ethers.getContractFactory("TestDistributorUpgrade")
  );

  return result.address;
}

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Updating Distributor contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  console.log("Upgrading...");
  await deployContracts();

  console.log("Successfully upgraded! Addresses:");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
