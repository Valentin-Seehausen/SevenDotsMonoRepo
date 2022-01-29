<script setup lang="ts">
import Auction from '../components/Auction.vue'
import { AuctionsFilter, useAuctionStore } from '~/stores/auctions'
const { t } = useI18n()
const auctionStore = useAuctionStore()
auctionStore.loadAuctions()

</script>

<template>
  <div v-if="auctionStore.hasRedeemableAuctions" class="mb-8 p-2 border-2 border-green-800 bg-green-400 hover:bg-green-200 cursor-pointer" @click="auctionStore.setFilter(AuctionsFilter.Users)">
    🎉 Congratulations! You have won some auctions. Click here to see you won auctions them and receive the NFT!
  </div>
  <div class="flex">
    <div class=" text-left">
      <button class="btn" @click="auctionStore.createAuction">
        <span>{{ t("auctions.createAuction") }}</span>
      </button>
      <span class="block text-center text-xs">receive 0.1 7DOTS</span>
    </div>
    <div class="flex-1 pl-4 pt-2">
      {{ 196- auctionStore.openSlots }} / 196
      <span v-if="auctionStore.isLoading">{{ t("button.loading") }}</span>
    </div>
    <div>
      <a class="filter" :class="{active: auctionStore.activeFilter === AuctionsFilter.All}" @click="auctionStore.setFilter(AuctionsFilter.All)">{{ t("filter.all") }}</a>
      <a class="filter" :class="{active: auctionStore.activeFilter === AuctionsFilter.Open}" @click="auctionStore.setFilter(AuctionsFilter.Open)">{{ t("filter.open") }}</a>
      <a class="filter" :class="{active: auctionStore.activeFilter === AuctionsFilter.Closed}" @click="auctionStore.setFilter(AuctionsFilter.Closed)">{{ t("filter.closed") }}</a>
      <a class="filter" :class="{active: auctionStore.activeFilter === AuctionsFilter.Users}" @click="auctionStore.setFilter(AuctionsFilter.Users)">{{ t("filter.users") }}</a>
    </div>
  </div>
  <div class="px-10 py-20 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
    <div v-for="auction in auctionStore.filteredAuctions" :key="auction.id">
      <Auction :key="auction.id" :auction="auction" />
    </div>
  </div>
</template>
