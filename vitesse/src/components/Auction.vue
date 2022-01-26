<script setup lang="ts">
import { ethers } from 'ethers'
import type Auction from 'types/Auction'
const props = defineProps<{ auction: Auction }>()
const { t } = useI18n()
</script>

<template>
  <router-link
    :to="`/auction/${props.auction.id}`"
  >
    <div role="link" class="bg-white max-w-xs rounded-md overflow-hidden shadow-md hover:shadow-lg hover:scale-102 transform-gpu transition duration-500 cursor-pointer">
      <div class="text-center">
        <img class="w-56 m-4 inline-block" alt="Dots" :src="props.auction.image">
      </div>
      <div class="py-4 px-4 ">
        <h3 class="text-md font-semibold overflow-hidden truncate">
          {{ t("auction.name", {id: props.auction.id, dna: props.auction.dna}) }}
        </h3>
        <h2>
          {{ auction.dna }}
        </h2>
        <p class="mt-4 font-thin">
          {{ t("auction.price") }} {{ ethers.utils.formatEther(props.auction.highestBid) }}
        </p>
      </div>
    </div>
  </router-link>
</template>
