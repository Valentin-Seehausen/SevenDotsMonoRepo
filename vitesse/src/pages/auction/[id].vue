<script setup lang="ts">
import { BigNumber, ethers } from 'ethers'
import type Auction from 'types/Auction'
import constants from '~/constants/constants'
import { useAuctionStore } from '~/stores/auctions'
import { useContractStore } from '~/stores/contracts'
import { useWalletStore } from '~/stores/wallet'
import { useTreasuryStore } from '~/stores/treasury'
const { t } = useI18n()

enum Status {
  Open,
  Claimable,
  BuyNow,
  Closed,
}

const props = defineProps<{ id: string }>()
const contracts = useContractStore()
const auctionStore = useAuctionStore()
const wallet = useWalletStore()
const treasury = useTreasuryStore()
const auction = ref<Auction>()
const isOpen = ref<boolean>()
const remainingTime = ref(0)
const isUsers = ref<boolean>()
const bid = ref('')
const minBid = ref<BigNumber>(BigNumber.from('0'))
const tooMuch = ref(false)
const tooLittle = ref(false)
const needsAllowance = ref(false)
const status = ref(Status.Open)

auctionStore.loadAuctions()

watchEffect(() => {
  auction.value = auctionStore.auctions.find(auction => auction.id === parseInt(props.id))
  if (!auction.value) return
  remainingTime.value = auction.value.end.getTime() - contracts.getDateOnChain().getTime()
  isOpen.value = auction.value.highestBidder === constants.zeroAddress || auction.value.end > contracts.getDateOnChain()
  isUsers.value = auction.value.highestBidder.toLowerCase() === wallet.account.toLowerCase()
  minBid.value = auction.value.highestBid.add(constants.minBidIncrease)
  bid.value = ethers.utils.formatEther(auction.value.highestBid.add(constants.minBidIncrease))
  if (remainingTime.value > 0)
    status.value = Status.Open
  else if (auction.value.highestBidder.toLowerCase() === wallet.account.toLowerCase())
    status.value = Status.Claimable
  else if (auction.value.highestBidder === constants.nullAddress)
    status.value = Status.BuyNow
  else
    status.value = Status.Closed
})

watchEffect(() => {
  try {
    needsAllowance.value = ethers.utils.parseEther(bid.value).gt(treasury.WETHAllowance)
    tooMuch.value = ethers.utils.parseEther(bid.value).gt(treasury.WETHBalance)
    tooLittle.value = unref(minBid).gt(ethers.utils.parseEther(bid.value))
  }
  catch (e) {
    needsAllowance.value = false
    tooMuch.value = false
    tooLittle.value = false
  }
})

const onBid = async() => {
  if (!auction.value) return
  await auctionStore.bidOnAuction(auction.value.id, ethers.utils.parseEther(bid.value))
}

const onRedeem = async() => {
  if (!auction.value) return
  await auctionStore.redeemAuction(auction.value.id)
}

const onBuyNow = async() => {
  if (!auction.value) return
  await auctionStore.buyNow(auction.value.id)
}

</script>

<template>
  <span v-if="auctionStore.isLoading">{{ t("button.loading") }}</span>
  <div
    v-if="auction"
    class="md:flex"
  >
    <div class="flex-none">
      <img class="w-56 m-4 inline-block" alt="Dots" :src="auction.image">
    </div>
    <div class="py-4 px-4 ">
      <div class="flex">
        <div class="flex-1">
          <h3 class="text-md font-semibold">
            {{ t("auction.name", {id: auction.id, dna: auction.dna}) }}
          </h3>
          <h3 class="text-md font-semibold">
            {{ auction.dna }}
          </h3>
          <p class="mt-4 font-thin">
            {{ t("auction.rarity") }}: {{ (auction.commonness/28*100 ).toString().substring(0,4) }}%
          </p>
        </div>
        <div>
          <div class="bg-black text-white inline p-2">
            <vue-countdown v-if="status == Status.Open" v-slot="{hours, minutes, seconds}" :time="remainingTime">
              <span v-if="isUsers">
                You win
              </span>
              in {{ hours }}:{{ minutes }}:{{ seconds }}
            </vue-countdown>
            <span v-else-if="status == Status.Claimable">
              Claim now
            </span>
            <span v-else-if="status == Status.BuyNow">
              Buy now
            </span>
            <span v-else>Closed</span>
          </div>
        </div>
      </div>
      <p v-if="auction.highestBidder != constants.nullAddress" class="mt-4 text-lg font-thin">
        {{ t("auction.highestBidder") }}: {{ auction.highestBidder }}
      </p>
      <p v-if="status == Status.Open" class="mt-4 text-lg font-thin">
        {{ t("auction.highestBid") }}: {{ ethers.utils.formatEther(auction.highestBid) }}
      </p>
      <p v-if="status == Status.Open" class="mt-4 text-lg font-thin">
        {{ t("auction.minBid") }}: {{ ethers.utils.formatEther(minBid) }}
      </p>
      <div class="flex mt-4">
        <div v-if="status === Status.Open">
          <div class="input flex items-center">
            <div class="basis-1/3">
              <logos:ethereum class="" />
            </div>
            <div class="basis-1/3">
              <input v-model="bid" type="text" class="outline-none text-center " placeholder="0.0">
            </div>
          </div>
        </div>
        <div class="ml-4">
          <button v-if="status == Status.BuyNow" class="btn" @click="onBuyNow">
            Buy now (0.001 WETH)
          </button>
          <button v-else-if="isOpen" class="btn" :disabled="tooMuch || tooLittle" @click="onBid">
            {{ tooMuch ? t("auction.notEnough") : tooLittle ? t("auction.tooLittle") : needsAllowance ? t("auction.needsAllowance") : t("auction.bid") }}
          </button>
          <button v-else-if="isUsers && !isOpen" class="btn" @click="onRedeem">
            {{ t("auction.redeem") }}
          </button>
        </div>
      </div>
      <div v-if="tooMuch && isOpen" class="mt-2">
        <p class="my-2 font-bold">
          You need more wETH to bid on this auction.
        </p>
        <p class="my-2">
          1. The best and cheapest solution is to get $MATIC at an exchange (i.e. Binance), withdraw it to the Polygon Mainnet (Matic) and exchange it against wETH at a DEX (i.e. Uniswap).
        </p>
        <p class="my-2">
          2. Another option is to <a href="https://wallet.polygon.technology/bridge" target="_blank" class="underline">bridge ETH</a> to Polygon, as explained <a target="_blank" class="underline" href="https://support.opensea.io/hc/en-us/articles/1500012881642-How-do-I-transfer-ETH-from-Ethereum-to-Polygon-">here</a>.
        </p>
      </div>
      <div v-if="needsAllowance && isOpen" class="mt-2">
        <p class="my-2 font-bold">
          First step is to approve Seven Dots to access your WETH.
        </p>
        <p class="my-2 ">
          Please wait for the transaction to suceed. You can choose a high priority for shorter waiting time.
        </p>
      </div>
    </div>
  </div>
  <div v-else-if="!auctionStore.isLoading">
    <h3 class="font-semibold">
      🚀 Well done!
    </h3>
    <p>
      This NFT belongs to you now. You can find it unter your <router-link to="/token">
        NFTs
      </router-link>
    </p>
  </div>
</template>
