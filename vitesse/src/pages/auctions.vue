<script setup lang="ts">
import Auction from '../components/Auction.vue'
import { AuctionsFilter, useAuctionStore } from '~/stores/auctions'
const { t } = useI18n()
const auctionStore = useAuctionStore()
auctionStore.loadAuctions()

</script>

<template>
  <div class="flex">
    <div class="flex-1 text-left">
      <button class="btn" @click="auctionStore.createAuction">
        {{ t("auctions.createAuction") }}
      </button>
      {{ 196- auctionStore.openSlots }} / 196
    </div>
    <div>
      <a class="filter" :class="{active: auctionStore.activeFilter === AuctionsFilter.All}" @click="auctionStore.setFilter(AuctionsFilter.All)">{{ t("filter.all") }}</a>
      <a class="filter" :class="{active: auctionStore.activeFilter === AuctionsFilter.Open}" @click="auctionStore.setFilter(AuctionsFilter.Open)">{{ t("filter.open") }}</a>
      <a class="filter" :class="{active: auctionStore.activeFilter === AuctionsFilter.Closed}" @click="auctionStore.setFilter(AuctionsFilter.Closed)">{{ t("filter.all") }}</a>
      <a class="filter" :class="{active: auctionStore.activeFilter === AuctionsFilter.Users}" @click="auctionStore.setFilter(AuctionsFilter.Users)">{{ t("filter.users") }}</a>
    </div>
  </div>
  <div class="px-10 py-20 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
    <div v-for="auction in auctionStore.filteredAuctions" :key="auction.id">
      <Auction :key="auction.id" :auction="auction" />
    </div>
  </div>
</template>
