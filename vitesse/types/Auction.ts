import type { BigNumber } from 'ethers'

export default interface Auction {
  highestBid: BigNumber
  highestBidder: string
  end: number
  seed: string
  id: number
}
