import { ethers } from "hardhat";
import constants from "../test/helper/constants";

async function main() {
  await ethers.provider.send("evm_increaseTime", [
    constants.time.auctionDuration,
  ]);
  await ethers.provider.send("evm_mine", []);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
