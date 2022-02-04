import { BigNumber, ethers } from 'ethers'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { TYPE, useToast } from 'vue-toastification'
import { useContractStore } from './contracts'
import { useWalletStore } from './wallet'

export const useTreasuryStore = defineStore('treasuryStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const toast = useToast()
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
  const totalRewardTokenBalance = ref(BigNumber.from(0))
  const totalShareOfTreasury = ref(BigNumber.from(0))
  const stakedShareOfTreasury = ref(BigNumber.from(0))

  const loadBalances = async() => {
    treasury.currentStakingFaktor().then(f => currentStakingFaktor.value = f)
    treasury.treasuryAmount().then(b => treasuryAmount.value = b)
    rewardToken.balanceOf(contracts.addresses.SevenDotsTreasury).then(b => treasuryRewardTokenBalance.value = b)
    rewardToken.totalSupply().then(b => totalSupplyRewardToken.value = b)
    if (!wallet.isConnected) return
    rewardToken.balanceOf(wallet.account).then(b => rewardTokenBalance.value = b)
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
      totalRewardTokenBalance.value = rewardTokenBalance.value.add(stakedRewardTokenBalance.value)
      totalShareOfTreasury.value = treasuryAmount.value.mul(totalRewardTokenBalance.value).div(totalSupplyRewardToken.value)
      stakedShareOfTreasury.value = treasuryAmount.value.mul(stakedRewardTokenBalance.value).div(totalSupplyRewardToken.value)
    }
    catch (e) {
    }
  })

  watchEffect(() => {
    return loadBalances() || wallet.isConnected
  })

  const stake = async(amount: BigNumber) => {
    if (amount.gt(unref(rewardTokenAllowance))) {
      const txw = await rewardToken.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, amount)
      const toastIdw = await toast('Waiting for approval.')
      await txw.wait()
      await toast.update(toastIdw, { content: '👍🏻 Approval granted.', options: { timeout: 4000, type: TYPE.SUCCESS } })
    }
    const tx = await treasury.connect(wallet.getSigner()).stake(amount)
    const toastId = await toast('Staking in progress.')
    await tx.wait()
    await toast.update(toastId, { content: '💎🐿 Staking succeeded. You will be rich soon.', options: { timeout: 4000, type: TYPE.SUCCESS } })
    loadBalances()
  }

  const unstake = async(amount: BigNumber) => {
    if (amount.gt(unref(stakingTokenAllowance))) {
      const txw = await stakingToken.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, amount)
      const toastIdw = await toast('Waiting for approval.')
      await txw.wait()
      await toast.update(toastIdw, { content: '👍🏻 Approval granted.', options: { timeout: 4000, type: TYPE.SUCCESS } })
    }

    const tx = await treasury.connect(wallet.getSigner()).unstake(amount)
    const toastId = await toast('Unstaking in progress.')
    await tx.wait()
    await toast.update(toastId, { content: '💎 Unstaking succeeded. Do you feel rich already?', options: { timeout: 4000, type: TYPE.SUCCESS } })

    loadBalances()
  }

  const withdraw = async(amount: BigNumber) => {
    if (amount.gt(unref(rewardTokenAllowance))) {
      const txw = await rewardToken.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsTreasury, amount)
      const toastIdw = await toast('Waiting for approval.')
      await txw.wait()
      await toast.update(toastIdw, { content: '👍🏻 Approval succeeded', options: { timeout: 4000, type: TYPE.SUCCESS } })
    }
    const tx = await treasury.connect(wallet.getSigner()).withdraw(amount)
    const toastId = await toast('Withdraw in progress.')
    await tx.wait()
    await toast.update(toastId, { content: '💸 Withdraw succeeded. Will you spend everything at once?', options: { timeout: 4000, type: TYPE.SUCCESS } })

    loadBalances()
  }

  return {
    treasuryAmount,
    rewardTokenBalance,
    stakingTokenBalance,
    stakedRewardTokenBalance,
    totalRewardTokenBalance,
    totalShareOfTreasury,
    stakedShareOfTreasury,
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
