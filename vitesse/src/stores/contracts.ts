import { acceptHMRUpdate, defineStore } from 'pinia'
import { ethers } from 'ethers'
import SevenDotsAuctionHouseInfo from '../../../hardhat/artifacts/contracts/SevenDotsAuctionHouse.sol/SevenDotsAuctionHouse.json'
import type { SevenDotsAuctionHouse } from '../../../hardhat/typechain-types/SevenDotsAuctionHouse'
import SevenDotsTokenInfo from '../../../hardhat/artifacts/contracts/SevenDotsToken.sol/SevenDotsToken.json'
import type { SevenDotsToken } from '../../../hardhat/typechain-types/SevenDotsToken'
import SevenDotsStackFactoryInfo from '../../../hardhat/artifacts/contracts/SevenDotsStackFactory.sol/SevenDotsStackFactory.json'
import type { SevenDotsStackFactory } from '../../../hardhat/typechain-types/SevenDotsStackFactory'
import SevenDotsTreasuryInfo from '../../../hardhat/artifacts/contracts/SevenDotsTreasury.sol/SevenDotsTreasury.json'
import type { SevenDotsTreasury } from '../../../hardhat/typechain-types/SevenDotsTreasury'
import SevenDotsRewardTokenInfo from '../../../hardhat/artifacts/contracts/SevenDotsRewardToken.sol/SevenDotsRewardToken.json'
import type { SevenDotsRewardToken } from '../../../hardhat/typechain-types/SevenDotsRewardToken'
import SevenDotsStakingTokenInfo from '../../../hardhat/artifacts/contracts/SevenDotsStakingToken.sol/SevenDotsStakingToken.json'
import type { SevenDotsStakingToken } from '../../../hardhat/typechain-types/SevenDotsStakingToken'
import MaticWETHInfo from '../../../hardhat/artifacts/contracts/MaticWETH.sol/MaticWETH.json'
import type { MaticWETH } from '../../../hardhat/typechain-types/MaticWETH'
import addresses137 from '../../../deployments/137/current/addresses.json'
import addresses1337 from '../../../deployments/1337/current/addresses.json'
import { aggregatorAddress, aggregatorV3InterfaceABI } from '~/constants/interfaces/aggregator'

export const useContractStore = defineStore('chain', () => {
  let addresses = addresses137
  let provider = new ethers.providers.JsonRpcProvider('https://polygon-mainnet.g.alchemy.com/v2/Dm5JhOrXy-tepLgDi0ptfEH3Sskkpk3P') // Polygon Matic
  if (import.meta.env.DEV) {
    addresses = addresses1337
    provider = new ethers.providers.JsonRpcProvider('http://localhost:8545') // Local Hardhat Testnet
  }
  const timeDifference = ref(0)

  const priceFeed = () => new ethers.Contract(aggregatorAddress, aggregatorV3InterfaceABI, provider)

  const auctionHouse = () => new ethers.Contract(
    addresses.SevenDotsAuctionHouse,
    SevenDotsAuctionHouseInfo.abi,
    provider,
  ) as unknown as SevenDotsAuctionHouse

  const stackFactory = () => new ethers.Contract(
    addresses.SevenDotsStackFactory,
    SevenDotsStackFactoryInfo.abi,
    provider,
  ) as unknown as SevenDotsStackFactory

  const treasury = () => new ethers.Contract(
    addresses.SevenDotsTreasury,
    SevenDotsTreasuryInfo.abi,
    provider,
  ) as unknown as SevenDotsTreasury

  const token = () => new ethers.Contract(
    addresses.SevenDotsToken,
    SevenDotsTokenInfo.abi,
    provider,
  ) as unknown as SevenDotsToken

  const rewardToken = () => new ethers.Contract(
    addresses.SevenDotsRewardToken,
    SevenDotsRewardTokenInfo.abi,
    provider,
  ) as unknown as SevenDotsRewardToken

  const stakingToken = () => new ethers.Contract(
    addresses.SevenDotsStakingToken,
    SevenDotsStakingTokenInfo.abi,
    provider,
  ) as unknown as SevenDotsStakingToken

  const WETH = () => new ethers.Contract(
    addresses.MaticWETH,
    MaticWETHInfo.abi,
    provider,
  ) as unknown as MaticWETH

  provider.getBlockNumber().then(n => provider.getBlock(n)).then((b) => {
    timeDifference.value = b.timestamp * 1000 - Date.now()
  })

  const getDateOnChain = () => {
    return new Date(Date.now() + timeDifference.value)
  }

  return {
    auctionHouse,
    stackFactory,
    treasury,
    token,
    rewardToken,
    stakingToken,
    WETH,
    addresses,
    getDateOnChain,
    priceFeed,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useContractStore, import.meta.hot))
