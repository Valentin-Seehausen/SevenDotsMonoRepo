import { acceptHMRUpdate, defineStore } from 'pinia'
import { ethers } from 'ethers'
import SevenDotsAuctionHouseInfo from '../../../deployments/1337/current/abis/SevenDotsAuctionHouse.json'
import type { SevenDotsAuctionHouse } from '../../../deployments/1337/current/types/SevenDotsAuctionHouse'
import addresses1337 from '../../../deployments/1337/current/addresses.json'

export const useContractStore = defineStore('chain', () => {
  const addresses = ref<Object>(addresses1337)
  const auctionHouse = () => new ethers.Contract(
    addresses1337.SevenDotsAuctionHouse,
    SevenDotsAuctionHouseInfo.abi,
    ethers.getDefaultProvider('http://localhost:8545'),
  ) as unknown as SevenDotsAuctionHouse

  return {
    auctionHouse,
    addresses,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useContractStore, import.meta.hot))
