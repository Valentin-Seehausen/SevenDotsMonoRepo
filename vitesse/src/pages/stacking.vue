<script setup lang="ts">
import { ethers } from 'ethers'
import { OnClickOutside } from '@vueuse/components'
import type Token from 'types/Token'
import constants from '~/constants/constants'
import { useStackingStore } from '~/stores/stacking'
import { useTokenStore } from '~/stores/token'
import { useTreasuryStore } from '~/stores/treasury'
const { t } = useI18n()
const stackingStore = useStackingStore()
const treasury = useTreasuryStore()

const tokens = useTokenStore()
const token1 = ref<Token>()
const token2 = ref<Token>()
const isVisible1 = ref(false)
const isVisible2 = ref(false)
const threshold = ref(Date.now() - constants.stackDuration)
const stackingRewardUSD = ref('7.0')

const onStack = async() => {
  if (token1.value && token2.value)
    await stackingStore.stackTokens(token1.value, token2.value)
  token1.value = undefined
  token2.value = undefined
}

const unstack = async(stackId: number) => {
  await stackingStore.unstack(stackId)
}

const onCountdownEnd = () => {
  threshold.value = Date.now() - constants.stackDuration
}

tokens.loadUserTokens()

watchEffect(() => {
  stackingRewardUSD.value = parseFloat(ethers.utils.formatUnits(ethers.utils.parseUnits('7.0', 18).mul(treasury.rewardTokenUSD), 18 + 8)).toFixed(2)
})
</script>

<template>
  <div class="md:flex">
    <div class="flex-1">
      <div>
        Top:
      </div>
      <div class="relative">
        <OnClickOutside @trigger="isVisible2 = false">
          <div class="btn secondary w-50 h-15 cursor-pointer flex p-0" @click="isVisible2 = !isVisible2">
            <img v-if="token2" class="w-14 h-14 border-4 border-white dark:border-gray-900" alt="Dots" :src="token2.image">
            <div v-if="token2" class="pl-1 pt-1 font-semibold overflow-hidden">
              {{ token2.name }}
              <p v-if="token2" class="font-thin">
                {{ token2.attributes.find(a => a.trait_type == 'DNA')?.value }}
              </p>
            </div>
            <div v-else class="p-1">
              {{ t("stacking.selectToken") }}
            </div>
          </div>
          <div class="border-black border-2 shadow-lg z-40 bg-gray-50 dark:bg-gray-900 dark:border-gray-400 grid grid-cols-1 divide-y w-50 border-t-0 top-14 absolute overflow-y-scroll max-h-60" :class="{hidden: !isVisible2}">
            <div v-if="tokens.isLoading" class="flex p-1 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              {{ t("button.loading") }}
            </div>
            <div v-for="token in tokens.tokens" :key="token.id" class="flex h-14 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" @click="token2 = token; isVisible2 = false">
              <img class="w-12" alt="Dots" :src="token.image">
              <div class="pl-2">
                {{ token.name }}
                <p class="font-thin">
                  {{ token.attributes.find(a => a.trait_type == 'DNA')?.value }}
                </p>
              </div>
            </div>
          </div>
        </OnClickOutside>
      </div>
    </div>
    <div class="flex-1">
      <div>
        Bottom:
      </div>
      <div class="relative">
        <OnClickOutside @trigger="isVisible1 = false">
          <div class="btn secondary w-50 h-15 cursor-pointer flex p-0" @click="isVisible1 = !isVisible1">
            <img v-if="token1" class="w-14 h-14 border-4 border-white dark:border-gray-400" alt="Dots" :src="token1.image">
            <div v-if="token1" class="pl-1 pt-1 font-semibold overflow-hidden">
              {{ token1.name }}
              <p v-if="token1" class="font-thin">
                {{ token1.attributes.find(a => a.trait_type == 'DNA')?.value }}
              </p>
            </div>
            <div v-else class="p-1">
              {{ t("stacking.selectToken") }}
            </div>
          </div>
          <div class="border-black border-2 shadow-lg z-40 bg-gray-50 dark:bg-gray-900 dark:border-gray-400 grid grid-cols-1 divide-y w-50 border-t-0 top-14 absolute overflow-y-scroll max-h-60" :class="{hidden: !isVisible1}">
            <div v-if="tokens.isLoading" class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              {{ t("button.loading") }}
            </div>
            <div v-for="token in tokens.tokens" :key="token.id" class="flex p-1 h-14 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" @click="token1 = token; isVisible1 = false">
              <img class="w-12" alt="Dots" :src="token.image">
              <div class="pl-2 font-semibold">
                {{ token.name }}
                <p class="font-thin">
                  {{ token.attributes.find(a => a.trait_type == 'DNA')?.value }}
                </p>
              </div>
            </div>
          </div>
        </OnClickOutside>
      </div>
    </div>
    <div class="flex-1 self-end pt-4">
      <button class="btn h-15 block ml-0 mt-2 w-50" @click="onStack">
        {{ t("stacking.createStack") }}
      </button>
      <span class="block text-center text-xs w-50">receive 7 $7DOTS ({{ stackingRewardUSD }} USD)</span>
    </div>
  </div>
  <h2 class="mt-14 font-semibold ">
    {{ t("stacking.stacks") }}
  </h2>
  <div v-if="stackingStore.stacks.length > 0" class="mt-8 table w-100 p-1 rounded-t-md border-black border-2">
    <div class="table-header-group">
      <div class="table-row">
        <div class="table-cell text-left ">
          {{ t("stacking.topTokenId") }}
        </div>
        <div class="table-cell text-left ">
          {{ t("stacking.bottomTokenId") }}
        </div>
        <div class="table-cell text-left ">
          {{ t("stacking.ready") }}
        </div>
        <div class="table-cell text-left " />
      </div>
    </div>
    <div class="table-row-group divide-y divide-light-100">
      <div
        v-for="stack in stackingStore.stacks" :key="stack.id" class="table-row"
      >
        <div class="table-cell ">
          {{ stack.tokenId2 }}
        </div>
        <div class="table-cell ">
          {{ stack.tokenId1 }}
        </div>
        <div class="table-cell ">
          <vue-countdown v-if="stack.stackTime - threshold > 0" v-slot="{hours, minutes, seconds}" :time="stack.stackTime - threshold" @end="onCountdownEnd">
            {{ hours }}:{{ minutes }}:{{ seconds }}
          </vue-countdown>
          <button v-else class="btn" @click="unstack(stack.id)">
            {{ t("stacking.unstack") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="stackingStore.stacks.length == 0" class="table-cell table">
    {{ t("stacking.empty") }}
  </div>
</template>
