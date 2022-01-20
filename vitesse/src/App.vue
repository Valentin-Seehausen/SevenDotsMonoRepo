<script setup lang="ts">
import { useWalletStore } from '~/stores/wallet'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Seven Dots',
  meta: [
    { name: 'description', content: 'Seven Dots NFT DeFi' },
  ],
})

const wallet = useWalletStore()
wallet.initWallet()
</script>

<template>
  <router-view />
</template>
