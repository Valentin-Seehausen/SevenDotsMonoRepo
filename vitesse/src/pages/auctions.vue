<script setup lang="ts">
import { useAuctionStore } from '~/stores/auctions'
const { t } = useI18n()
const auctionStore = useAuctionStore()
auctionStore.loadAuctions()
</script>

<template>
  <button class="btn" @click="auctionStore.createAuction">
    {{ t("auctions.createAuction") }}
  </button>
  <div v-for="auction in auctionStore.auctions" :key="auction.id">
    {{ auction.highestBid }}
    {{ auction.highestBidder }}
    {{ auction.seed }}
    {{ auction.end }}
    {{ auction.id }}
  </div>
</template>
