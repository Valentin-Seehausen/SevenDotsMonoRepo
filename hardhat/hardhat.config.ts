import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-gas-reporter";
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
dotenv.config({ path: ".env" });

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200000,
      },
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_KEY,
    token: "MATIC",
    gasPriceApi:
      "https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice",
    showTimeSpent: true,
  },
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: process.env.ALCHEMYAPI_POLYGON_MAINNET as string,
        blockNumber: 23917420,
        enabled: false,
      },
      mining: {
        auto: false,
        interval: [10000, 12000],
      },
    },
    local: {
      url: "http://localhost:8545",
    },
    matic: {
      url: process.env.ALCHEMYAPI_POLYGON_MAINNET,
      accounts: [`${process.env.DEPLOYER}`],
    },
    mumbai: {
      url: process.env.ALCHEMYAPI_MUMBAI,
      accounts: [`${process.env.FRFREM_PK}`],
    },
    mainnet: {
      url: process.env.ALCHEMYAPI_MAINNET,
    },
  },
};

export default config;
