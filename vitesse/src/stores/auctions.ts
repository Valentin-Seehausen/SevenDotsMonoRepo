import { acceptHMRUpdate, defineStore } from 'pinia'
import type Auction from 'types/Auction'
import type { BigNumber } from 'ethers'
import seeds from './../constants/seeds.json'
import { useWalletStore } from './wallet'
import { useContractStore } from './contracts'
import { useTokenStore } from './token'
import constants from '~/constants/constants'

export enum AuctionsFilter {
  All,
  Open,
  Closed,
  Users,
}

export const useAuctionStore = defineStore('auctionStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const router = useRouter()
  const auctionHouse = contracts.auctionHouse()
  const WETH = contracts.WETH()
  const auctions = ref<Auction[]>([])
  const activeFilter = ref<AuctionsFilter>(AuctionsFilter.Open)
  const openSlots = ref(196)

  const loadAuctions = async() => {
    auctions.value = (await auctionHouse.allAuctions())?.map((auction: any) => {
      const seed = auction[3].toString()
      // @ts-expect-error-error
      const metadata = seeds[seed] as any
      return {
        highestBid: auction[0],
        highestBidder: auction[1],
        end: new Date(auction[2] * 1000),
        seed: auction[3],
        id: auction[4],
        dna: metadata.DNA,
        image: metadata.image,
      } as Auction
    })
    openSlots.value = await auctionHouse.freeAuctionSlots()
  }

  const createAuction = async() => {
    if (!wallet.isConnected) return
    await auctionHouse.connect(wallet.getSigner()).createAuction()
    loadAuctions()
  }

  const bidOnAuction = async(auctionId: number, amount: BigNumber) => {
    if (!wallet.isConnected) return
    await WETH.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsAuctionHouse, amount)
    await auctionHouse.connect(wallet.getSigner()).bidOnAuction(auctionId, amount)
  }

  const redeemAuction = async(auctionId: number) => {
    if (!wallet.isConnected) return
    await auctionHouse.connect(wallet.getSigner()).redeemAuction(auctionId)
    useTokenStore().loadUserTokens()
    router.replace('/auctions')
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

  return { auctions, openSlots, loadAuctions, createAuction, bidOnAuction, redeemAuction, setFilter, activeFilter, filteredAuctions }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuctionStore, import.meta.hot))
