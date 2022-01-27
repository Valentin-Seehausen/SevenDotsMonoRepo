import type { BigNumber } from 'ethers'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useContractStore } from './contracts'
import { useWalletStore } from './wallet'

export const useTreasuryStore = defineStore('treasuryStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const treasury = contracts.treasury()
  const rewardToken = contracts.rewardToken()
  const stakingToken = contracts.stakingToken()
  const WETH = contracts.WETH()

  const treasuryAmount = ref(0)
  const rewardTokenBalance = ref(0)
  const stakingTokenBalance = ref(0)
  const WETHBalance = ref(0)
  const currentStakingFaktor = ref(0)
  const shareOfTreasury = ref(0)

  const loadBalances = async() => {
    treasury.currentStakingFaktor().then(f => currentStakingFaktor.value = f)
    treasury.treasuryAmount().then(b => treasuryAmount.value = b)
    if (!wallet.isConnected) return
    rewardToken.balanceOf(wallet.account).then(b => rewardTokenBalance.value = b)
    WETH.balanceOf(wallet.account).then(b => WETHBalance.value = b)
    stakingToken.balanceOf(wallet.account).then(b => stakingTokenBalance.value = b)
    treasury.shareOfTreasury(wallet.account).then(s => shareOfTreasury.value = s)
  }

  watch(() => wallet.account, () => loadBalances())

  const stake = async(amount: BigNumber) => {
    await rewardToken.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, amount)
    await treasury.connect(wallet.getSigner()).stake(amount)
    loadBalances()
  }

  const unstake = async(amount: BigNumber) => {
    await stakingToken.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, amount)
    await treasury.connect(wallet.getSigner()).unstake(amount)
    loadBalances()
  }

  const withdraw = async(amount: BigNumber) => {
    await rewardToken.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, amount)
    await treasury.connect(wallet.getSigner()).withdraw(amount)
    loadBalances()
  }

  return {
    treasuryAmount,
    rewardTokenBalance,
    stakingTokenBalance,
    WETHBalance,
    currentStakingFaktor,
    shareOfTreasury,
    stake,
    unstake,
    withdraw,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTreasuryStore, import.meta.hot))
