<script setup lang="ts">
import { ethers } from 'ethers'
import { useTreasuryStore } from '~/stores/treasury'

const { t } = useI18n()
const treasury = useTreasuryStore()

const isStaking = ref(true)
const amountIn = ref('')
const amountOut = ref('')
const tooMuch = ref(false)
const mor = ref()

watchEffect(() => {
  try {
    if (isStaking.value) {
      amountOut.value = ethers.utils.formatEther(
        ethers.utils.parseEther(amountIn.value)
          .mul(ethers.utils.parseEther('1'))
          .div(treasury.currentStakingFaktor),
      )
      tooMuch.value = ethers.utils.parseEther(amountIn.value).gt(treasury.rewardTokenBalance)
    }
    else {
      amountOut.value = ethers.utils.formatUnits(
        ethers.utils.parseEther(amountIn.value)
          .mul(treasury.currentStakingFaktor),
        36,
      )
      tooMuch.value = ethers.utils.parseEther(amountIn.value).gt(treasury.stakingTokenBalance)
    }
  }
  catch (e) {
    amountOut.value = ''
    tooMuch.value = false
  }
})

watchEffect(() => {
  try {
    mor.value = ethers.utils.formatUnits(ethers.utils.parseUnits('7', 22).div(treasury.currentStakingFaktor), 4)
  }
  catch (e) {
  }
})

const setMax = () => {
  if (isStaking.value)
    amountIn.value = ethers.utils.formatEther(treasury.rewardTokenBalance)
  else
    amountIn.value = ethers.utils.formatEther(treasury.stakingTokenBalance)
}

const onClick = async() => {
  if (isStaking.value)
    await treasury.stake(ethers.utils.parseEther(amountIn.value))
  else
    await treasury.unstake(ethers.utils.parseEther(amountIn.value))
  amountIn.value = ''
}

</script>

<template>
  <div>
    <h2 class="font-semibold ">
      {{ t("staking.stacks") }}
    </h2>
    <div class="md:flex">
      <div class="basis-2/3 mb-8">
        <div class="border-black border-2 p-2 flex h-14 items-center max-w-140 overflow-auto">
          <div class="basis-1/3">
            {{ isStaking ? t("staking.rewardToken") : t("staking.stakingToken") }}
          </div>
          <div class="basis-1/3 text-center">
            <input v-model="amountIn" type="text" class="w-25 sm:30 md:w-auto md:w-full inline outline-none text-center text-lg" :class="{'line-through': tooMuch}" placeholder="0.0">
          </div>
          <div class="basis-1/3 text-right">
            <button v-if="isStaking ? treasury.rewardTokenBalance.gt(0) : treasury.stakingTokenBalance.gt(0)" class="btn text-center secondary" @click="setMax">
              {{ t("staking.max") }}
            </button>
          </div>
        </div>
        <div class="my-4 h-14 max-w-140 flex items-center justify-center">
          <button class="icon-btn cursor-pointer p-1 rounded-full secondary" @click="isStaking = !isStaking; amountIn = ''">
            <gg:arrows-exchange-v class="text-3xl" />
          </button>
        </div>
        <div class="border-black border-2 p-2 flex h-14 items-center max-w-140">
          <div class="basis-1/3">
            {{ !isStaking ? t("staking.rewardToken") : t("staking.stakingToken") }}
          </div>
          <div class="basis-1/3">
            <input :value="amountOut" type="text" class="outline-none text-center text-lg" placeholder="0.0">
          </div>
          <div class="basis-1/3 text-right" />
        </div>
        <div class="mt-4 text-right max-w-140">
          <button class="btn text-lg" :disabled="tooMuch" @click="onClick">
            {{ isStaking ? t("staking.stake") : t("staking.unstake") }}
          </button>
        </div>
      </div>
      <div class="basis-1/3 md:pl-4">
        <table>
          <tr>
            <td class="p1">
              {{ t("staking.earlyUserMultipler") }}:
            </td>
            <td class="pl-4 p-1">
              {{ mor }}
            </td>
          </tr>
          <tr>
            <td class="p1">
              {{ t("staking.rewardTokenBalance") }}:
            </td>
            <td class="pl-4 p-1">
              {{ ethers.utils.formatEther(treasury.rewardTokenBalance).substring(0,5) }}
            </td>
          </tr>
          <tr>
            <td class="p1">
              {{ t("staking.stakedRewardTokenBalance") }}:
            </td>
            <td class="pl-4 p-1">
              {{ ethers.utils.formatEther(treasury.stakedRewardTokenBalance).substring(0,5) }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
