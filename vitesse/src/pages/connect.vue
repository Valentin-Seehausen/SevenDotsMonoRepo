<script setup lang="ts">
import { useWalletStore } from '~/stores/wallet'

const wallet = useWalletStore()

const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-4xl">
      Super
    </p>
    <button class="w-48 overflow-hidden btn hover:btn-green">
      <div v-if="!wallet.isMetaMaskInstalled">
        Please install Metamask
      </div>
      <div v-else-if="!wallet.isConnected">
        {{ t("wallet.connect") }}
      </div>
      <p class="truncate overflow-hidden">
        {{ t("wallet.connected", {account: wallet.accountName}) }}
      </p>
      {{}}
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
