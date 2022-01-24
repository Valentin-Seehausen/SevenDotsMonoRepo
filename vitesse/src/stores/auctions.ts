import { acceptHMRUpdate, defineStore } from 'pinia'
import type Auction from 'types/Auction'
import type { BigNumber } from 'ethers'
import { useWalletStore } from './wallet'
import { useContractStore } from './contracts'
import constants from '~/constants'

export enum AuctionsFilter {
  All,
  Open,
  Closed,
  Users,
}

export const useAuctionStore = defineStore('auctionStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const auctionHouse = contracts.auctionHouse()
  const WETH = contracts.WETH()
  const auctions = ref<Auction[]>([])
  const activeFilter = ref<AuctionsFilter>(AuctionsFilter.Open)

  const loadAuctions = async() => {
    auctions.value = (await auctionHouse.allAuctions())?.map((auction: any) => {
      return {
        highestBid: auction[0],
        highestBidder: auction[1],
        end: new Date(auction[2] * 1000),
        seed: auction[3],
        id: auction[4],
      } as Auction
    })
  }

  const createAuction = async() => {
    if (!wallet.isConnected) return
    auctionHouse.connect(wallet.getSigner()).createAuction()
  }

  const bidOnAuction = async(auctionId: number, amount: BigNumber) => {
    if (!wallet.isConnected) return
    await WETH.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsAuctionHouse, amount)
    auctionHouse.connect(wallet.getSigner()).bidOnAuction(auctionId, amount)
  }

  const setFilter = (_filter: AuctionsFilter) => {
    activeFilter.value = _filter
  }

  const filteredAuctions = computed(() => {
    switch (activeFilter.value) {
      case AuctionsFilter.Open:
        return auctions.value.filter(auction => auction.highestBidder === constants.zeroAddress || auction.end > contracts.getDateOnChain())
      case AuctionsFilter.Closed:
        return auctions.value.filter(auction => !(auction.highestBidder === constants.zeroAddress || auction.end > contracts.getDateOnChain()))
      case AuctionsFilter.Users:
        return auctions.value.filter(auction => auction.highestBidder.toLowerCase() === wallet.account.toLowerCase())
      default:
        return auctions.value
    }
  })

  return { auctions, loadAuctions, createAuction, bidOnAuction, setFilter, activeFilter, filteredAuctions }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuctionStore, import.meta.hot))
