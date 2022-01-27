<script setup lang="ts">
import { ethers } from 'ethers'
import { useTreasuryStore } from '~/stores/treasury'
const { t } = useI18n()
const treasury = useTreasuryStore()
const amountIn = ref('')
const amountOut = ref('')
const tooMuch = ref(false)

watchEffect(() => {
  try {
    amountOut.value = ethers.utils.formatEther(
      ethers.utils.parseEther(amountIn.value)
        .mul(treasury.shareOfTreasury)
        .div(treasury.rewardTokenBalance),
    )
    tooMuch.value = ethers.utils.parseEther(amountIn.value).gt(treasury.rewardTokenBalance)
  }
  catch (e) {
    amountOut.value = ''
    tooMuch.value = false
  }
})

const setMax = () => {
  amountIn.value = ethers.utils.formatEther(treasury.rewardTokenBalance)
}

const onClick = async() => {
  await treasury.withdraw(ethers.utils.parseEther(amountIn.value))
  amountIn.value = ''
}

</script>
<template>
  <div>
    <h2 class="font-semibold ">
      {{ t("treasury.treasury") }}
    </h2>
    <div class="flex">
      <div class="basis-2/3">
        <div class="border-black border-2 p-2 flex h-14 items-center w-140">
          <div class="basis-1/3">
            {{ t("staking.rewardToken") }}
          </div>
          <div class="basis-1/3">
            <input v-model="amountIn" type="text" class="outline-none text-center text-lg " :class="{'line-through': tooMuch}" placeholder="0.0">
          </div>
          <div class="basis-1/3 text-right">
            <button v-if=" treasury.rewardTokenBalance > 0" class="btn text-center secondary" @click="setMax">
              {{ t("staking.max") }}
            </button>
          </div>
        </div>
        <div class="mt-14 border-black border-2 p-2 flex h-14 items-center w-140">
          <div class="basis-1/3">
            <logos:ethereum class="inline text-base" />
          </div>
          <div class="basis-1/3">
            <input :value="amountOut" type="text" class="outline-none text-center text-lg" placeholder="0.0">
          </div>
          <div class="basis-1/3 text-right" />
        </div>
        <div class="mt-4 text-right w-140">
          <button class="btn text-lg" :disabled="tooMuch" @click="onClick">
            {{ t("treasury.withdraw") }}
          </button>
        </div>
      </div>
      <div class="basis-1/3">
        <p>
          {{ t("treasury.treasuryAmount") }}
        </p>
        <p class="text-lg py-2">
          <logos:ethereum class="inline text-base" />
          {{ ethers.utils.formatEther(treasury.treasuryAmount) }}
        </p>
        <p class="mt-4">
          {{ t("treasury.share") }}
        </p>
        <p class="text-lg py-2">
          <logos:ethereum class="inline text-base" />
          {{ ethers.utils.formatEther(treasury.shareOfTreasury) }}
        </p>
        <p class="mt-4">
          {{ t("staking.rewardTokenBalance") }}
        </p>
        <p class="text-lg py-2">
          {{ ethers.utils.formatEther(treasury.rewardTokenBalance) }}
        </p>
      </div>
    </div>
  </div>
</template>
