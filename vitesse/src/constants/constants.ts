import { ethers } from 'ethers'

export default {
  minBidIncrease: ethers.utils.parseEther('0.001'),
  zeroAddress: '0x0000000000000000000000000000000000000000',
  stackDuration: 2 * 60 * 60 * 1000,
}
