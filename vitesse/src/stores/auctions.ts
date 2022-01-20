import { acceptHMRUpdate, defineStore } from 'pinia'
import { useWalletStore } from './wallet'
import { useContractStore } from './contracts'

interface Auction {
  highestBid: number
  highestBidder: string
  end: number
  seed: string
  id: number
}

export const useAuctionStore = defineStore('auctionStore', () => {
  const wallet = useWalletStore()
  const auctionHouse = useContractStore().auctionHouse()
  const auctions = ref<Auction[]>()

  const loadAuctions = async() => {
    auctions.value = (await auctionHouse.allAuctions())?.map((auction: any) => {
      return {
        highestBid: auction[0],
        highestBidder: auction[1],
        end: auction[2],
        seed: auction[3],
        id: auction[4],
      } as Auction
    })
  }

  const createAuction = async() => {
    if (!wallet.isConnected) return
    auctionHouse.connect(unref(wallet.signer)).createAuction()
  }

  return { auctions, loadAuctions, createAuction }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuctionStore, import.meta.hot))
