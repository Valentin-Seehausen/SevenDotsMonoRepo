import { acceptHMRUpdate, defineStore } from 'pinia'
import { ethers } from 'ethers'
import SevenDotsAuctionHouseInfo from '../../../deployments/1337/current/abis/SevenDotsAuctionHouse.json'
import type { SevenDotsAuctionHouse } from '../../../deployments/1337/current/types/SevenDotsAuctionHouse'
import SevenDotsTokenInfo from '../../../deployments/1337/current/abis/SevenDotsToken.json'
import type { SevenDotsToken } from '../../../deployments/1337/current/types/SevenDotsToken'
import SevenDotsStackFactoryInfo from '../../../deployments/1337/current/abis/SevenDotsStackFactory.json'
import type { SevenDotsStackFactory } from '../../../deployments/1337/current/types/SevenDotsStackFactory'
import MaticWETHInfo from '../../../deployments/1337/current/abis/MaticWETH.json'
import type { MaticWETH } from '../../../deployments/1337/current/types/MaticWETH'
import addresses1337 from '../../../deployments/1337/current/addresses.json'

export const useContractStore = defineStore('chain', () => {
  const addresses = addresses1337
  const provider = ethers.getDefaultProvider('http://localhost:8545')
  const timeDifference = ref(0)

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

  const token = () => new ethers.Contract(
    addresses.SevenDotsToken,
    SevenDotsTokenInfo.abi,
    provider,
  ) as unknown as SevenDotsToken

  const WETH = () => new ethers.Contract(
    addresses.MaticWETH,
    MaticWETHInfo.abi,
    ethers.getDefaultProvider('http://localhost:8545'),
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
    token,
    WETH,
    addresses,
    getDateOnChain,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useContractStore, import.meta.hot))
