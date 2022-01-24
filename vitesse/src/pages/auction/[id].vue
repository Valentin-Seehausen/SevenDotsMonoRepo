<script setup lang="ts">
import { ethers } from 'ethers'
import dateFormat from 'dateformat'
import type Auction from 'types/Auction'
import constants from '~/constants'
import { useAuctionStore } from '~/stores/auctions'

const props = defineProps<{ id: string }>()
const { t } = useI18n()
const auctions = useAuctionStore()
auctions.loadAuctions()
const auction = ref<Auction>()
const isOpen = ref<boolean>()
const bid = ref()
watchEffect(() => {
  auction.value = auctions.auctions.find(auction => auction.id === parseInt(props.id))
  if (!auction.value) return
  isOpen.value = auction.value.highestBidder === constants.zeroAddress || auction.value.end < new Date()
  bid.value = ethers.utils.formatEther(auction.value.highestBid.add(constants.minBidIncrease))
})
const onBid = async() => {
  if (!auction.value) return
  await auctions.bidOnAuction(auction.value.id, ethers.utils.parseEther(bid.value))
  auctions.loadAuctions()
}
</script>

<template>
  <div
    v-if="auction"
    class="flex"
  >
    <div class="flex-none">
      <img class="w-56 m-4 inline-block" alt="Dots" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNScgeD0nMTQnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PScxNycgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzcnIHg9JzIwJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvc3ZnPg==">
    </div>
    <div class="py-4 px-4 ">
      <h3 class="text-md font-semibold">
        {{ t("dots.one") }}
      </h3>
      <p class="mt-4 text-lg font-thin">
        <span v-if="isOpen">{{ t("auction.isOpen") }}</span><span v-else>{{ t("auction.ended") }}</span>
      </p>
      <p class="mt-4 text-lg font-thin">
        {{ t("auction.ends") }}: {{ dateFormat(auction.end, "HH:MM:ss TT, mmmm dS") }}
      </p>
      <p class="mt-4 text-lg font-thin">
        {{ t("auction.highestBidder") }}: {{ auction.highestBidder }}
      </p>
      <p class="mt-4 text-lg font-thin">
        {{ t("auction.highestBid") }}: {{ ethers.utils.formatEther(auction.highestBid) }}
      </p>
      <div v-if="isOpen" class="py-4 px-4">
        <input v-model="bid" type="text" class="border-black border-2 p-2">
      </div>
      <button v-if="isOpen" class="w-56  border-black bg-black text-white border-2 p-2 items-center justify-center " @click="onBid">
        {{ t("auction.bid") }}
      </button>
    </div>
  </div>
</template>
