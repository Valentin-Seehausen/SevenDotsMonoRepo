<script setup lang="ts">
import Auction from '../components/Auction.vue'
import { useAuctionStore } from '~/stores/auctions'
const { t } = useI18n()
const auctionStore = useAuctionStore()
auctionStore.loadAuctions()
</script>

<template>
  <button class="btn" @click="auctionStore.createAuction">
    {{ t("auctions.createAuction") }}
  </button>
  <div class="px-10 py-20 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
    <div v-for="auction in auctionStore.auctions" :key="auction.id">
      <Auction :key="auction.id" :auction="auction" />
    </div>
  </div>
</template>
