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
      <h4 class="py-4 mt-4 font-semibold">
        {{ t("token.attributes") }}
      </h4>

      <table class=" table-auto p-2 rounded-t-md divide-y divide-gray-500">
        <thead class="table-header bg-gray-200 dark:bg-gray-800">
          <tr>
            <td class="px-1 py-1">
              {{ t("token.trait") }}
            </td>
            <td class="px-1 py-1">
              {{ t("token.value") }}
            </td>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-500">
          <tr v-for="attribute in token.attributes" :key="attribute.trait_type" class="p-1 table-row ">
            <td class="px-1 py-1">
              {{ attribute.trait_type }}
            </td>
            <td class="px-2 py-1">
              {{ attribute.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else class="flex">
    <h3>{{ t("tokens.notFound") }}</h3>
  </div>
</template>
