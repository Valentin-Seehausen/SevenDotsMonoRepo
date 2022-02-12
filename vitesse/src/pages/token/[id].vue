<script setup lang="ts">
import type Token from 'types/Token'
import { useTokenStore } from '../../stores/token'
import type { MergeEvent } from '../../../../hardhat/typechain-types/SevenDotsStackFactory'
import { useStackingStore } from '~/stores/stacking'
import { useContractStore } from '~/stores/contracts'

const props = defineProps<{ id: string }>()
const tokens = useTokenStore()
const contracts = useContractStore()
const token = ref<Token>()
const merge = ref<MergeEvent>()
const parent1 = ref('')
const parent2 = ref('')
const loading = ref(false)

watchEffect(async() => {
  loading.value = true
  token.value = await tokens.tokens.find(token => token.id === parseInt(props.id))
  if (!token.value)
    token.value = await tokens.getToken(parseInt(props.id))

  loading.value = false
})

watchEffect(async() => {
  try {
    merge.value = await useStackingStore().getMerge(parseInt(props.id))
    parent1.value = `data:image/svg+xml;base64,${btoa(await contracts.metadata().calcSvg(merge.value.args.parentSeed1))}`
    parent2.value = `data:image/svg+xml;base64,${btoa(await contracts.metadata().calcSvg(merge.value.args.parentSeed2))}`
  }
  catch (e) {}
})

</script>

<template>
  <div v-if="loading" class="loading">
    Loading NFT
  </div>
  <div
    v-else-if="token"
    class="flex flex-col items-center"
  >
    <div class="flex-none">
      <img class="w-65 md:w-100 m-4 border-2 dark:border-gray-400 inline-block" alt="Dots" :src="token.image">
    </div>
    <div class="py-4 w-65 md:w-100 text-center">
      <h3 class="text-md font-bold text-lg">
        {{ token.name }}
      </h3>
      <p class="py-4 mt-4 break-words max-w-full">
        DNA: {{ token.dna }}
      </p>
      <p class="py-4 mt-4 break-words max-w-full">
        Rarity Points: {{ token.rarityPoints }}
      </p>
      <p class="py-4 mt-4 break-words max-w-full">
        Dots: {{ token.dots }}
      </p>
    </div>
    <div v-if="merge">
      <h2 class="text-center font-bold dark:font-normal text-lg my-4">
        Merge History
      </h2>
      <div class="flex">
        <div>
          <img class="dark:border-gray-400 border-2 w-21 md:w-30 mb-2 md:mb-4" :src="parent2">
          <img class="dark:border-gray-400 border-2 w-21 md:w-30" :src="parent1">
        </div>
        <div>
          <img class="dark:border-gray-400 border-2 w-44 md:w-64 ml-2 md:ml-4" :src="token.image">
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex">
    <h3>No NFT with this id found.</h3>
  </div>
</template>
