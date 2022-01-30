import { BigNumber, ethers } from 'ethers'
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

  const treasuryAmount = ref(BigNumber.from(0))
  const treasuryRewardTokenBalance = ref(BigNumber.from(0))
  const rewardTokenBalance = ref(BigNumber.from(0))
  const rewardTokenAllowance = ref(BigNumber.from(0))
  const stakedRewardTokenBalance = ref(BigNumber.from(0))
  const stakingTokenAllowance = ref(BigNumber.from(0))
  const totalSupplyRewardToken = ref(BigNumber.from(0))
  const stakingTokenBalance = ref(BigNumber.from(0))
  const WETHBalance = ref(BigNumber.from(0))
  const WETHAllowance = ref(BigNumber.from(0))
  const currentStakingFaktor = ref(BigNumber.from(0))
  const shareOfTreasury = ref(BigNumber.from(0))

  const loadBalances = async() => {
    treasury.currentStakingFaktor().then(f => currentStakingFaktor.value = f)
    treasury.treasuryAmount().then(b => treasuryAmount.value = b)
    if (!wallet.isConnected) return
    rewardToken.balanceOf(wallet.account).then(b => rewardTokenBalance.value = b)
    rewardToken.balanceOf(contracts.addresses.SevenDotsTreasury).then(b => treasuryRewardTokenBalance.value = b)
    rewardToken.totalSupply().then(b => totalSupplyRewardToken.value = b)
    rewardToken.allowance(wallet.account, contracts.addresses.SevenDotsTreasury).then(r => rewardTokenAllowance.value = r)
    WETH.balanceOf(wallet.account).then(b => WETHBalance.value = b)
    WETH.allowance(wallet.account, contracts.addresses.SevenDotsAuctionHouse).then(r => WETHAllowance.value = r)
    stakingToken.balanceOf(wallet.account).then(b => stakingTokenBalance.value = b)
    stakingToken.allowance(wallet.account, contracts.addresses.SevenDotsTreasury).then(r => stakingTokenAllowance.value = r)
    treasury.shareOfTreasury(wallet.account).then(s => shareOfTreasury.value = s)
  }

  watchEffect(() => {
    try {
      stakedRewardTokenBalance.value = stakingTokenBalance.value.mul(currentStakingFaktor.value).div(ethers.utils.parseUnits('10', 17))
    }
    catch (e) {
    }
  })

  watchEffect(() => {
    if (wallet.isConnected)
      loadBalances()
  })

  const stake = async(amount: BigNumber) => {
    if (amount.gt(unref(rewardTokenAllowance)))
      await rewardToken.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, amount)
    await treasury.connect(wallet.getSigner()).stake(amount)
    loadBalances()
  }

  const unstake = async(amount: BigNumber) => {
    if (amount.gt(unref(stakingTokenAllowance)))
      await stakingToken.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, amount)
    await treasury.connect(wallet.getSigner()).unstake(amount)
    loadBalances()
  }

  const withdraw = async(amount: BigNumber) => {
    await rewardToken.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, BigNumber.from(100000000))
    await treasury.connect(wallet.getSigner()).withdraw(amount)
    loadBalances()
  }

  return {
    treasuryAmount,
    rewardTokenBalance,
    stakingTokenBalance,
    stakedRewardTokenBalance,
    totalSupplyRewardToken,
    treasuryRewardTokenBalance,
    rewardTokenAllowance,
    stakingTokenAllowance,
    WETHAllowance,
    WETHBalance,
    currentStakingFaktor,
    shareOfTreasury,
    loadBalances,
    stake,
    unstake,
    withdraw,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTreasuryStore, import.meta.hot))
