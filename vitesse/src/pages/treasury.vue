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
    <div class="md:flex">
      <div class="basis-2/3 mb-8">
        <div class="border-black border-2 p-2 flex h-14 items-center max-w-140">
          <div class="basis-1/3">
            {{ t("staking.rewardToken") }}
          </div>
          <div class="basis-1/3">
            <input v-model="amountIn" type="text" class="outline-none text-center text-lg " :class="{'line-through': tooMuch}" placeholder="0.0">
          </div>
          <div class="basis-1/3 text-right">
            <button v-if=" treasury.rewardTokenBalance.gt(0)" class="btn text-center secondary" @click="setMax">
              {{ t("staking.max") }}
            </button>
          </div>
        </div>
        <div class="mt-14 border-black border-2 p-2 flex h-14 items-center max-w-140">
          <div class="basis-1/3">
            <logos:ethereum class="inline text-base" />
          </div>
          <div class="basis-1/3">
            <input :value="amountOut" type="text" class="outline-none text-center text-lg" placeholder="0.0">
          </div>
          <div class="basis-1/3 text-right" />
        </div>
        <div class="mt-4 text-right max-w-140">
          <button class="btn text-lg" :disabled="tooMuch" @click="onClick">
            {{ t("treasury.withdraw") }}
          </button>
        </div>
      </div>
      <div class="basis-1/3 text-sm md:pl-4">
        <table>
          <tr>
            <td class="p1">
              {{ t("treasury.treasuryAmount") }}
            </td>
            <td class="pl-4 p-1">
              {{ ethers.utils.formatEther(treasury.treasuryAmount).substring(0,5) }}
              <logos:ethereum class="inline text-base" />
            </td>
          </tr>
          <tr class="pt-4">
            <td class="p1">
              {{ t("treasury.circulatingSupply") }}
            </td>
            <td class="pl-4 p-1">
              {{ ethers.utils.formatEther(treasury.totalSupplyRewardToken).substring(0,5) }}
            </td>
          </tr>
          <tr>
            <td class="p1">
              {{ t("treasury.staked") }}
            </td>
            <td class="pl-4 p-1">
              {{ ethers.utils.formatEther(treasury.treasuryRewardTokenBalance).substring(0,5) }}
            </td>
          </tr>
          <tr>
            <td class="p1">
              {{ t("treasury.share") }}
            </td>
            <td class="pl-4 p-1">
              {{ ethers.utils.formatEther(treasury.treasuryAmount.mul(treasury.rewardTokenBalance.add(treasury.stakedRewardTokenBalance)).div(treasury.totalSupplyRewardToken)).substring(0,5) }}
              <logos:ethereum class="inline text-base text-sm" />
            </td>
          </tr>
          <tr>
            <td class="p1">
              Claimable / Staked
            </td>
            <td class="pl-4 p-1">
              {{ ethers.utils.formatEther(treasury.shareOfTreasury).substring(0,5) }}
              / {{ ethers.utils.formatEther(treasury.treasuryAmount.mul(treasury.stakedRewardTokenBalance).div(treasury.totalSupplyRewardToken)).substring(0,5) }}
              <logos:ethereum class="inline text-base text-sm" />
            </td>
          </tr>
          <tr>
            <td class="p1">
              Your $7Dots
            </td>
            <td class="pl-4 p-1">
              {{ ethers.utils.formatEther(treasury.rewardTokenBalance.add(treasury.stakedRewardTokenBalance)).substring(0,5) }}
            </td>
          </tr>
          <tr>
            <td class="p1">
              Wallet / Staked
            </td>
            <td class="pl-4 p-1">
              {{ ethers.utils.formatEther(treasury.rewardTokenBalance).substring(0,5) }}
              / {{ ethers.utils.formatEther(treasury.stakedRewardTokenBalance).substring(0,5) }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
