<script setup lang="ts">
import { useWalletStore } from '~/stores/wallet'
const wallet = useWalletStore()

</script>

<template>
  <div v-if="wallet.isConnected && wallet.chainId != 137" class="border-red-800 bg-red-400 dark:bg-red-900 dark:hover:bg-red-800 hover:bg-red-200 border-2 p-2 mb-2 cursor-pointer" @click="wallet.changeNetwork">
    Please connect to Polygon (Matic) Network by clicking here.
  </div>
</template>
