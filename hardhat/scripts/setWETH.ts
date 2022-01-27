import { ethers } from "hardhat";
import { SevenDotsTreasury } from "../typechain-types/SevenDotsTreasury";
import { SevenDotsAuctionHouse } from "../typechain-types/SevenDotsAuctionHouse";
import { SevenDotsDistributor } from "../typechain-types/SevenDotsDistributor";
import addresses137 from "../../deployments/137/current/addresses.json";

let auctionHouse: SevenDotsAuctionHouse,
  distributor: SevenDotsDistributor,
  treasury: SevenDotsTreasury;

export default async function setMaticWETH() {
  treasury = (await ethers.getContractFactory("SevenDotsTreasury")).attach(
    addresses137.SevenDotsTreasury
  ) as SevenDotsTreasury;

  distributor = (
    await ethers.getContractFactory("SevenDotsDistributor")
  ).attach(addresses137.SevenDotsDistributor) as SevenDotsDistributor;

  auctionHouse = (
    await ethers.getContractFactory("SevenDotsAuctionHouse")
  ).attach(addresses137.SevenDotsAuctionHouse) as SevenDotsAuctionHouse;

  const maticWETH = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";

  await auctionHouse.setWETH(maticWETH);
  await treasury.setWETH(maticWETH);
  await distributor.setWETH(maticWETH);
}

async function main() {
  const [deployer] = await ethers.getSigners();
  let networkData = await (deployer as any).provider.getNetwork();

  console.log("Chain ID:", networkData.chainId);
  console.log("Updating contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  console.log("Updating MaticWETH...");
  await setMaticWETH();

  console.log("Successfully updated! ");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
