<script setup lang="ts">
import { ethers } from 'ethers'
import type Auction from 'types/Auction'
const props = defineProps<{ auction: Auction }>()
const { t } = useI18n()
</script>

<template>
  <div class="bg-white max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
    <div>
      <img class="w-56 m-4 inline-block" alt="Dots" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNScgeD0nMTQnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PScxNycgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzcnIHg9JzIwJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvc3ZnPg==">
    </div>
    <div class="py-4 px-4 ">
      <h3 class="text-md font-semibold text-gray-600">
        {{ props.auction.seed }}
      </h3>
      <p class="mt-4 text-lg font-thin">
        ETH {{ ethers.utils.formatEther(props.auction.highestBid) }}
      </p>
      <span class="flex items-center justify-center mt-4 w-full bg-green-200 hover:bg-yellow-500 py-1 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <button class="font-semibold text-gray-800">{{ t("auction.bid") }}</button>
      </span>
    </div>
  </div>
</template>
