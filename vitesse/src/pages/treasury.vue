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
    <div class="lg:flex lg:gap-8">
      <div class="flex-1 mb-8">
        <div class="border-black border-2 p-2 flex h-14 items-center max-w-140 overflow-auto">
          <div class="basis-1/3">
            {{ t("staking.rewardToken") }}
          </div>
          <div class="basis-1/3 text-center">
            <input v-model="amountIn" type="text" class="w-25 sm:30 md:w-auto md:w-full inline outline-none text-center text-lg" :class="{'line-through': tooMuch}" placeholder="0.0">
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
      <div class="flex-1 text-sm md:pl-4">
        <div class="max-w-140">
          <h2 class="text-xl py-4 font-bold text-center">
            Treasury stats
          </h2>
          <div class="bg-black rounded-xl text-white pl-4 md:pl-20 py-2 md:py-4 font-bold">
            <div class="flex h-14 items-center">
              <div class="grow">
                Treasury Amount:
              </div>
              <div class="flex-1 text-right">
                {{ ethers.utils.formatEther(treasury.treasuryAmount).substring(0,5) }} ETH
              </div>
              <div class="w-10 md:w-20 flex-none text-center">
                <logos:ethereum class="inline text-base h-12" />
              </div>
            </div>
            <div class="flex h-14 items-center">
              <div class="grow">
                Circulating $7DOTS supply:
              </div>
              <div class="flex-1 text-right">
                {{ ethers.utils.formatEther(treasury.totalSupplyRewardToken).substring(0,5) }} $7DOTS
              </div>
              <div class="w-10 md:w-20 flex-none text-center" />
            </div>
            <div class="flex h-14 items-center">
              <div class="grow">
                Total $7DOTS staked:
              </div>
              <div class="flex-1 text-right">
                {{ ethers.utils.formatEther(treasury.treasuryRewardTokenBalance).substring(0,5) }} $7DOTS
              </div>
              <div class="w-10 md:w-20 flex-none text-center" />
              <div class="flex justify-between" />
            </div>
          </div>
          <h2 class="text-xl py-4 pt-8 font-bold text-center">
            Your wallet stats
          </h2>
          <div class="bg-black rounded-xl text-white pl-4 md:pl-20 py-2 md:py-4 font-bold">
            <div class="flex h-14 items-center">
              <div class="grow">
                Share of treasury
              </div>
              <div class="flex-1 text-right">
                {{ ethers.utils.formatEther(treasury.totalShareOfTreasury).substring(0,5) }} ETH
              </div>
              <div class="w-10 md:w-20 flex-none text-center">
                <logos:ethereum class="inline text-base h-12" />
              </div>
            </div>
            <div class="flex h-14 items-center">
              <div class="grow">
                Claimable / Staked
              </div>
              <div class="flex-1 text-right">
                {{ ethers.utils.formatEther(treasury.shareOfTreasury).substring(0,5) }} /
                {{ ethers.utils.formatEther(treasury.stakedShareOfTreasury).substring(0,5) }} ETH
              </div>
              <div class="w-10 md:w-20 flex-none text-center">
                <logos:ethereum class="inline text-base h-12" />
              </div>
            </div>
            <div class="flex h-14 items-center">
              <div class="grow">
                $7DOTS total
              </div>
              <div class="flex-1 text-right">
                {{ ethers.utils.formatEther(treasury.totalRewardTokenBalance).substring(0,5) }} $7DOTS
              </div>
              <div class="w-10 md:w-20 flex-none text-center" />
            </div>
            <div class="flex h-14 items-center">
              <div class="grow">
                Wallet / Staked
              </div>
              <div class="flex-1 text-right">
                {{ ethers.utils.formatEther(treasury.rewardTokenBalance).substring(0,5) }}
                / {{ ethers.utils.formatEther(treasury.stakedRewardTokenBalance).substring(0,5) }} $7DOTS
              </div>
              <div class="w-10 md:w-20 flex-none text-center" />
              <div class="flex justify-between" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
