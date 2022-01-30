import { ethers } from 'ethers'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useContractStore } from './contracts'
import { useWalletStore } from './wallet'

export const useApprovalStore = defineStore('approvalStore', () => {
  const SET_REWARDTOKEN_ALLOWANCE = ethers.utils.parseEther('1000000000000')
  const MIN_REWARDTOKEN_ALLOWANCE = ethers.utils.parseEther('100000')
  const SET_STAKING_ALLOWANCE = ethers.utils.parseEther('1000000000000')
  const MIN_STAKING_ALLOWANCE = ethers.utils.parseEther('10000')
  const SET_WETH_ALLOWANCE = ethers.utils.parseEther('1')
  const MIN_WETH_ALLOWANCE = ethers.utils.parseEther('0.01')

  const contracts = useContractStore()
  const wallet = useWalletStore()
  const loading = ref(false)
  const token = ref(false)
  const rewardToken = ref(false)
  const stakingToken = ref(false)
  const weth = ref(false)
  const all = ref(false)
  const ignore = ref(false)

  watchEffect(() => {
    all.value = token.value && rewardToken.value && stakingToken.value && weth.value
  })

  const loadApprovals = async() => {
    if (!wallet.isConnected) return
    loading.value = true
    await Promise.all([
      contracts.token().isApprovedForAll(wallet.account, contracts.addresses.SevenDotsStackFactory).then((r) => { token.value = r }),
      contracts.rewardToken().allowance(wallet.account, contracts.addresses.SevenDotsTreasury).then((r) => { rewardToken.value = r.gt(MIN_REWARDTOKEN_ALLOWANCE) }),
      contracts.stakingToken().allowance(wallet.account, contracts.addresses.SevenDotsTreasury).then((r) => { stakingToken.value = r.gt(MIN_STAKING_ALLOWANCE) }),
      contracts.WETH().allowance(wallet.account, contracts.addresses.SevenDotsAuctionHouse).then((r) => { weth.value = r.gt(MIN_WETH_ALLOWANCE) }),
    ])
    loading.value = false
  }

  const getApprovals = async() => {
    if (!wallet.isConnected) return
    if (!token.value)
      await contracts.token().connect(wallet.getSigner()).setApprovalForAll(contracts.addresses.SevenDotsAuctionHouse, true)
    if (!rewardToken.value)
      await contracts.rewardToken().connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, SET_REWARDTOKEN_ALLOWANCE)
    if (!stakingToken.value)
      await contracts.stakingToken().connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, SET_STAKING_ALLOWANCE)
    if (!weth.value)
      await contracts.WETH().connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsAuctionHouse, SET_WETH_ALLOWANCE)
    await loadApprovals()
  }

  watchEffect(() => {
    if (wallet.isConnected)
      loadApprovals()
  })

  return {
    token,
    rewardToken,
    stakingToken,
    weth,
    all,
    ignore,
    loading,
    loadApprovals,
    getApprovals,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useApprovalStore, import.meta.hot))
