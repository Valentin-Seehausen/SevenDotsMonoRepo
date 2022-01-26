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
      <h4 class="py-4">
        {{ t("token.attributes") }}
      </h4>
      <p v-for="attribute in token.attributes" :key="attribute.trait_type" class="">
        {{ attribute.trait_type }}: {{ attribute.value }}
      </p>
    </div>
  </div>
  <div v-else class="flex">
    <h3>{{ t("tokens.notFound") }}</h3>
  </div>
</template>
