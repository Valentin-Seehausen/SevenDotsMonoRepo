<script setup lang="ts">
import { ethers } from 'ethers'
import Auction from '../components/Auction.vue'
import { AuctionsFilter, useAuctionStore } from '~/stores/auctions'
import { useTreasuryStore } from '~/stores/treasury'
const { t } = useI18n()
const auctionStore = useAuctionStore()
const treasury = useTreasuryStore()
auctionStore.loadAuctions()
auctionStore.setFilter(AuctionsFilter.Open)
const creatorRewardUSD = ref('7777777')

watchEffect(() => {
  creatorRewardUSD.value = parseFloat(ethers.utils.formatUnits(ethers.utils.parseUnits('0.1', 18).mul(treasury.rewardTokenUSD), 18 + 8)).toFixed(2)
})

</script>

<template>
  <div v-if="auctionStore.hasRedeemableAuctions" class="mb-8 p-2 border-2 border-green-800 bg-green-400 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 cursor-pointer" @click="auctionStore.setFilter(AuctionsFilter.Claimable)">
    🎉 Congratulations! You won some auctions. Click here to claim them.
  </div>
  <div class="flex">
    <div class="shrink-0 text-left">
      <button class="btn" @click="auctionStore.createAuction">
        <span>{{ t("auctions.createAuction") }}</span>
      </button>
      <span class="block text-center text-xs">receive 0.1 $7DOTS ({{ creatorRewardUSD }} USD)</span>
    </div>
    <div class="pl-4 pt-3 test-left shrink-0">
      {{ 196- auctionStore.openSlots }} / 196
      <span v-if="auctionStore.isLoading">{{ t("button.loading") }}</span>
    </div>

    <div class="flex-1 min-h-12 flex items-center flex-wrap justify-end">
      <div v-if="auctionStore.activeFilter === AuctionsFilter.Search" class="input h-8 w-22 flex items-center">
        <div class="">
          <carbon-search class="" />
        </div>
        <input v-model="auctionStore.search" type="text" class="outline-none text-center w-12" placeholder="f1c1">
      </div>
      <a v-else class="filter block sm:inline" @click="auctionStore.setFilter(AuctionsFilter.Search)">{{ t("filter.search") }}</a>
      <a class="filter block sm:inline" :class="{active: auctionStore.activeFilter === AuctionsFilter.Open}" @click="auctionStore.setFilter(AuctionsFilter.Open)">{{ t("filter.open") }}</a>
      <a class="filter block sm:inline" :class="{active: auctionStore.activeFilter === AuctionsFilter.Users}" @click="auctionStore.setFilter(AuctionsFilter.Users)">{{ t("filter.users") }}</a>
      <a class="filter block sm:inline" :class="{active: auctionStore.activeFilter === AuctionsFilter.Claimable}" @click="auctionStore.setFilter(AuctionsFilter.Claimable)">{{ t("filter.claimable") }}</a>
    </div>
  </div>
  <div class="lg:px-10 px-1 py-20 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
    <div v-for="auction in auctionStore.filteredAuctions" :key="auction.id">
      <Auction :key="auction.id" :auction="auction" />
    </div>
  </div>
</template>
