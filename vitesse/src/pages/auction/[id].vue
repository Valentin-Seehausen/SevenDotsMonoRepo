<script setup lang="ts">
import { ethers } from 'ethers'
import dateFormat from 'dateformat'
import type Auction from 'types/Auction'
import constants from '~/constants/constants'
import { useAuctionStore } from '~/stores/auctions'
import { useContractStore } from '~/stores/contracts'
import { useWalletStore } from '~/stores/wallet'
const { t } = useI18n()

const props = defineProps<{ id: string }>()
const contracts = useContractStore()
const auctions = useAuctionStore()
const wallet = useWalletStore()
const auction = ref<Auction>()
const isOpen = ref<boolean>()
const isUsers = ref<boolean>()
const bid = ref()

auctions.loadAuctions()

watchEffect(() => {
  auction.value = auctions.auctions.find(auction => auction.id === parseInt(props.id))
  if (!auction.value) return
  isOpen.value = auction.value.highestBidder === constants.zeroAddress || auction.value.end > contracts.getDateOnChain()
  isUsers.value = auction.value.highestBidder.toLowerCase() === wallet.account
  bid.value = ethers.utils.formatEther(auction.value.highestBid.add(constants.minBidIncrease))
})

const onBid = async() => {
  if (!auction.value) return
  await auctions.bidOnAuction(auction.value.id, ethers.utils.parseEther(bid.value))
  auctions.loadAuctions()
}

const onRedeem = async() => {
  if (!auction.value) return
  await auctions.redeemAuction(auction.value.id)
  await auctions.loadAuctions()
}
</script>

<template>
  <div
    v-if="auction"
    class="flex"
  >
    <div class="flex-none">
      <img class="w-56 m-4 inline-block" alt="Dots" :src="auction.image">
    </div>
    <div class="py-4 px-4 ">
      <h3 class="text-md font-semibold">
        {{ t("auction.name", {id: auction.id, dna: auction.dna}) }}
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
      <button v-if="isUsers && !isOpen" class="w-56  border-black bg-black text-white border-2 p-2 items-center justify-center " @click="onRedeem">
        {{ t("auction.redeem") }}
      </button>
    </div>
  </div>
  <div v-else class="flex">
    <h3>{{ t("auctions.notFound") }}</h3>
  </div>
</template>
