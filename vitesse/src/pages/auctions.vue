<script setup lang="ts">
import { useAuctionStore } from '~/stores/auctions'

const auctionStore = useAuctionStore()
auctionStore.loadAuctions()
const auctions = auctionStore.auctions

</script>

<template>
  <div v-for="auction in auctions" :key="auction.id">
    {{ auction.highestBid }}
    {{ auction.highestBidder }}
    {{ auction.seed }}
    {{ auction.end }}
    {{ auction.id }}
  </div>
</template>
