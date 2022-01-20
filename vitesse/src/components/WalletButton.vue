<script setup lang="ts">
import { useWalletStore } from '~/stores/wallet'

const wallet = useWalletStore()

const { t } = useI18n()
</script>

<template>
  <button class="w-34 overflow-hidden btn hover:btn-dark border-white">
    <div v-if="!wallet.isMetaMaskInstalled">
      Please install Metamask
    </div>
    <div v-else-if="!wallet.isConnected">
      {{ t("wallet.connect") }}
    </div>
    <p class="truncate overflow-hidden">
      {{ t("wallet.connected", {account: wallet.accountName}) }}
    </p>
  </button>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
