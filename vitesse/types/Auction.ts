import type { BigNumber } from 'ethers'

export default interface Auction {
  highestBid: BigNumber
  highestBidder: string
  end: Date
  seed: string
  id: number
  dna: string
  image: string
}
