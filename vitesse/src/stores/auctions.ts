import { acceptHMRUpdate, defineStore } from 'pinia'
import type Auction from 'types/Auction'
import type { BigNumber } from 'ethers'
import { TYPE, useToast } from 'vue-toastification'
import seeds from './../constants/seeds.json'
import { useWalletStore } from './wallet'
import { useContractStore } from './contracts'
import { useTokenStore } from './token'
import { useTreasuryStore } from './treasury'
import constants from '~/constants/constants'

export enum AuctionsFilter {
  Search,
  All,
  Open,
  Closed,
  Users,
  Claimable,
}

export const useAuctionStore = defineStore('auctionStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const router = useRouter()
  const treasury = useTreasuryStore()
  const toast = useToast()
  const auctionHouse = contracts.auctionHouse()
  const WETH = contracts.WETH()
  const auctions = ref<Auction[]>([])
  const activeFilter = ref<AuctionsFilter>(AuctionsFilter.Open)
  const openSlots = ref(196)
  const isLoading = ref(false)
  const hasRedeemableAuctions = ref(false)
  const search = ref('')

  const loadAuctions = async() => {
    isLoading.value = true
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
        commonness: metadata.commonness,
        image: metadata.image,
      } as Auction
    })
    hasRedeemableAuctions.value = auctions.value.findIndex(auction => auction.highestBidder.toLowerCase() === wallet.account.toLowerCase() && auction.end > contracts.getDateOnChain()) !== -1
    openSlots.value = await auctionHouse.freeAuctionSlots()
    isLoading.value = false
  }

  const createAuction = async() => {
    if (!wallet.isConnected) return
    const tx = await auctionHouse.connect(wallet.getSigner()).createAuction()
    const toastId = await toast('Creating auction.')
    await tx.wait()
    await toast.update(toastId, { content: '💰 Done. Clever you, creating an auction to earn some token.', options: { timeout: 4000, type: TYPE.SUCCESS } })
    loadAuctions()
  }

  const bidOnAuction = async(auctionId: number, amount: BigNumber) => {
    if (!wallet.isConnected) return
    if (amount.gt(treasury.WETHAllowance)) {
      const txw = await WETH.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsAuctionHouse, amount)
      const toastId = await toast('Waiting for Weth approval')
      await txw.wait()
      await toast.update(toastId, { content: '👍🏻 Nice one, approved your WETH!', options: { timeout: 4000, type: TYPE.SUCCESS } })
      treasury.loadBalances()
    }
    const tx = await auctionHouse.connect(wallet.getSigner()).bidOnAuction(auctionId, amount)
    const toastId = await toast(`Bidding on Auction #${auctionId}.`)
    await tx.wait()
    await toast.update(toastId, { content: '👍🏻 Successfully bid on auction. Hey, you will earn this dot soon!', options: { timeout: 4000, type: TYPE.SUCCESS } })
  }

  const redeemAuction = async(auctionId: number) => {
    if (!wallet.isConnected) return
    const tx = await auctionHouse.connect(wallet.getSigner()).redeemAuction(auctionId)
    const toastId = await toast(`Redeeming Auction #${auctionId}`)
    await tx.wait()
    useTokenStore().loadUserTokens()
    loadAuctions()
    router.replace('/auctions')
    await toast.update(toastId, { content: '👍🏻 Success! This dot is yours now.', options: { timeout: 4000, type: TYPE.SUCCESS } })
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
      case AuctionsFilter.Claimable:
        return auctions.value.filter(auction => auction.highestBidder.toLowerCase() === wallet.account.toLowerCase() && auction.end < contracts.getDateOnChain())
      case AuctionsFilter.Search:
        return auctions.value.filter(auction => (auction.highestBidder.toLowerCase() === constants.nullAddress || auction.end > contracts.getDateOnChain()) && auction.dna.includes(search.value.toLowerCase()))
      default:
        return auctions.value
    }
  })

  return {
    auctions,
    openSlots,
    isLoading,
    hasRedeemableAuctions,
    search,
    loadAuctions,
    createAuction,
    bidOnAuction,
    redeemAuction,
    setFilter,
    activeFilter,
    filteredAuctions,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuctionStore, import.meta.hot))
