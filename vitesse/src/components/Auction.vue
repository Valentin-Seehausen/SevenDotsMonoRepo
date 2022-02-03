<script setup lang="ts">
import { ethers } from 'ethers'
import type Auction from 'types/Auction'
import constants from '~/constants/constants'
import { useContractStore } from '~/stores/contracts'
import { useWalletStore } from '~/stores/wallet'
const props = defineProps<{ auction: Auction }>()
const contracts = useContractStore()
const wallet = useWalletStore()
const { t } = useI18n()
const remainingTime = ref(props.auction.end.getTime() - contracts.getDateOnChain().getTime())
</script>

<template>
  <router-link
    :to="`/auction/${props.auction.id}`"
  >
    <div role="link" class="m-auto max-w-76 bg-white border-black border-4 cursor-pointer hover:bg-black hover:text-white">
      <div class="text-center">
        <img class="w-56 m-4 inline-block border-white border-4" alt="Dots" :src="props.auction.image">
      </div>
      <div class="py-4 px-4 flex">
        <div class="basis-1/2">
          <h3 class="text-md font-semibold overflow-hidden truncate">
            {{ t("auction.name", {id: props.auction.id, dna: props.auction.dna}) }}
          </h3>
          <h2>
            {{ auction.dna }}
          </h2>
          <p class="mt-4 font-thin">
            {{ t("auction.rarity") }}: {{ (auction.commonness/28*100 ).toString().substring(0,4) }}%
          </p>
          <p class="mt-4 font-thin">
            <logos:ethereum class="inline" /> {{ ethers.utils.formatEther(props.auction.highestBid) }}
          </p>
        </div>
        <div class="basis-1/2 text-right">
          <div class="bg-black text-white inline p-2">
            <vue-countdown v-if="remainingTime > 0" v-slot="{hours, minutes, seconds}" :time="remainingTime">
              in {{ hours }}:{{ minutes }}:{{ seconds }}
            </vue-countdown>
            <span v-else-if="auction.highestBidder.toLowerCase() === wallet.account.toLowerCase()">
              Claim now
            </span>
            <span v-else-if="auction.highestBidder === constants.nullAddress">
              Buy now
            </span>
            <span v-else>Closed</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
