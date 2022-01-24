import { acceptHMRUpdate, defineStore } from 'pinia'
import { ethers } from 'ethers'
import dateFormat from 'dateformat'
import SevenDotsAuctionHouseInfo from '../../../deployments/1337/current/abis/SevenDotsAuctionHouse.json'
import type { SevenDotsAuctionHouse } from '../../../deployments/1337/current/types/SevenDotsAuctionHouse'
import MaticWETHInfo from '../../../deployments/1337/current/abis/MaticWETH.json'
import type { MaticWETH } from '../../../deployments/1337/current/types/MaticWETH'
import addresses1337 from '../../../deployments/1337/current/addresses.json'

export const useContractStore = defineStore('chain', () => {
  const addresses = addresses1337
  const provider = ethers.getDefaultProvider('http://localhost:8545')
  const auctionHouse = () => new ethers.Contract(
    addresses.SevenDotsAuctionHouse,
    SevenDotsAuctionHouseInfo.abi,
    provider,
  ) as unknown as SevenDotsAuctionHouse

  provider.getBlockNumber().then(n => provider.getBlock(n)).then(b => console.log(dateFormat(new Date(b.timestamp * 1000), 'HH:MM:ss TT, mmmm dS')))

  const WETH = () => new ethers.Contract(
    addresses.MaticWETH,
    MaticWETHInfo.abi,
    ethers.getDefaultProvider('http://localhost:8545'),
  ) as unknown as MaticWETH

  return {
    auctionHouse,
    WETH,
    addresses,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useContractStore, import.meta.hot))
