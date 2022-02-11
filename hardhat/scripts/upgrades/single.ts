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
import addresses from "../../../deployments/137/current/addresses.json";

let distributor: SevenDotsDistributor;

export default async function updateContracts() {
  let [deployer] = await ethers.getSigners();

  await upgrades.upgradeProxy(
    addresses.SevenDotsStackFactory,
    await ethers.getContractFactory("SevenDotsStackFactory"),
    {
      timeout: 0,
    }
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
  const result = await updateContracts();

  console.log("Successfully upgraded! Result:");
  console.log(result);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
