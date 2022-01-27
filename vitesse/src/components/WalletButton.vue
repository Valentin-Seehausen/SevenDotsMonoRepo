<script setup lang="ts">
import { useWalletStore } from '~/stores/wallet'

const wallet = useWalletStore()

const { t } = useI18n()
const onClick = () => {
  if (!wallet.isMetaMaskInstalled) return
  if (!wallet.isConnected) {
    wallet.requestConnection()
  }
  else {
    // disconnect
  }
}
</script>

<template>
  <button class="w-48 overflow-hidden btn" @click="onClick">
    <p v-if="!wallet.isMetaMaskInstalled">
      {{ t("wallet.no-metamask") }}
    </p>
    <p v-else-if="!wallet.isConnected">
      {{ t("wallet.connect") }}
    </p>
    <p v-else class="truncate overflow-hidden">
      {{ t("wallet.connected", {account: wallet.accountName}) }}
    </p>
  </button>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
