<script setup lang="ts">
import type Token from 'types/Token'
import { useTokenStore } from '../../stores/token'
const { t } = useI18n()

const props = defineProps<{ id: string }>()
const tokens = useTokenStore()
const token = ref<Token>()

watchEffect(() => {
  if (!tokens.tokens) return
  token.value = tokens.tokens.find(token => token.id === parseInt(props.id))
})

</script>

<template>
  <div
    v-if="token"
    class="flex"
  >
    <div class="flex-none">
      <img class="w-56 m-4 inline-block" alt="Dots" :src="token.image">
    </div>
    <div class=" py-4 px-4 text-left">
      <h3 class="text-md font-semibold">
        {{ token.name }}
      </h3>
      <h4 class="py-4 font-semibold">
        {{ t("token.attributes") }}
      </h4>
      <div v-for="attribute in token.attributes" :key="attribute.trait_type" class="border-1 border-gray-200 bg-gray-50 rounded p-1">
        {{ attribute.trait_type }}: {{ attribute.value }}
      </div>
    </div>
  </div>
  <div v-else class="flex">
    <h3>{{ t("tokens.notFound") }}</h3>
  </div>
</template>
