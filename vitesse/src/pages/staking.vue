<script setup lang="ts">
import { ethers } from 'ethers'
import { useTreasuryStore } from '~/stores/treasury'

const { t } = useI18n()
const treasury = useTreasuryStore()

const isStaking = ref(true)
const amountIn = ref('')
const amountOut = ref('')
const tooMuch = ref(false)

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
    <div class="flex">
      <div class="basis-2/3">
        <div class="border-black border-2 p-2 flex h-14 items-center w-140">
          <div class="basis-1/3">
            {{ isStaking ? t("staking.rewardToken") : t("staking.stakingToken") }}
          </div>
          <div class="basis-1/3">
            <input v-model="amountIn" type="text" class="outline-none text-center text-lg " :class="{'line-through': tooMuch}" placeholder="0.0">
          </div>
          <div class="basis-1/3 text-right">
            <button v-if="isStaking ? treasury.rewardTokenBalance.gt(0) : treasury.stakingTokenBalance.gt(0)" class="btn text-center secondary" @click="setMax">
              {{ t("staking.max") }}
            </button>
          </div>
        </div>
        <div class="my-4 h-14 w-140 flex items-center justify-center">
          <button class="icon-btn cursor-pointer p-1 rounded-full secondary" @click="isStaking = !isStaking; amountIn = ''">
            <gg:arrows-exchange-v class="text-3xl" />
          </button>
        </div>
        <div class="border-black border-2 p-2 flex h-14 items-center w-140">
          <div class="basis-1/3">
            {{ !isStaking ? t("staking.rewardToken") : t("staking.stakingToken") }}
          </div>
          <div class="basis-1/3">
            <input :value="amountOut" type="text" class="outline-none text-center text-lg" placeholder="0.0">
          </div>
          <div class="basis-1/3 text-right" />
        </div>
        <div class="mt-4 text-right w-140">
          <button class="btn text-lg" :disabled="tooMuch" @click="onClick">
            {{ isStaking ? t("staking.stake") : t("staking.unstake") }}
          </button>
        </div>
      </div>
      <div class="basis-1/3">
        <p>
          {{ t("staking.currentStakingFaktor") }}
        </p>
        <p class="text-lg py-2">
          {{ ethers.utils.formatEther(treasury.currentStakingFaktor) }}
        </p>
        <p class="mt-4">
          {{ t("staking.rewardTokenBalance") }}:
        </p>
        <p class="text-lg py-2">
          {{ ethers.utils.formatEther(treasury.rewardTokenBalance) }}
        </p>
        <p class="mt-4">
          {{ t("staking.stakingTokenBalance") }}:
        </p>
        <p class="text-lg py-2">
          {{ ethers.utils.formatEther(treasury.stakingTokenBalance) }}
        </p>
      </div>
    </div>
  </div>
</template>
