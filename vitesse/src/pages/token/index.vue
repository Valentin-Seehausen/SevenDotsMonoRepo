<script setup lang="ts">
import { useTokenStore } from '~/stores/token'
import Token1 from '~/components/Token.vue'
const { t } = useI18n()

const tokens = useTokenStore()
</script>

<template>
  <StackingInline />
  <div v-if="tokens.isLoading">
    {{ t("button.loading") }}
  </div>
  <div v-if="tokens.tokens?.length == 0">
    {{ t("token.empty") }}
  </div>
  <div class="px-10 py-20 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
    <div v-for="token in tokens.tokens" :key="token.id" class="text-center">
      <Token1 :key="token.id" :token="token" />
    </div>
  </div>
</template>
