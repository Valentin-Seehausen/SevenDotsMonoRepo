<script setup lang="ts">
import { useApprovalStore } from '~/stores/approvals'
import { useWalletStore } from '~/stores/wallet'
const wallet = useWalletStore()
const approvalStore = useApprovalStore()

</script>

<template>
  <div v-if="wallet.isConnected && !approvalStore.loading && !approvalStore.ignore && !approvalStore.all" class="relative">
    <carbon-close class="absolute cursor-pointer hover:font-bold w-9 h-9 p-1 top-2 right-2 z-10 text-lg bg-transaparent" @click="approvalStore.ignore = true" />
    <div class="relative border-yellow-900 bg-yellow-400 hover:bg-yellow-200 border-2 p-2 mb-2 cursor-pointer" @click="approvalStore.getApprovals">
      <p class="font-semibold">
        Click here to approve smart contracts.
      </p>
      <p v-if="approvalStore.waiting" class="font-mono loading">
        Waiting for transactions
      </p>
      <p v-else>
        Please approve SevenDots smart contracts for a smoots user experience. You will be asked to sign up to four (4) transaction.
      </p>
    </div>
  </div>
  <div v-else-if="approvalStore.showSuccess" class="relative">
    <carbon-close class="absolute cursor-pointer hover:font-bold w-9 h-9 p-1 top-2 right-2 z-10 text-lg bg-transaparent" @click="approvalStore.showSuccess = false" />
    <div class="relative border-green-900 bg-green-400 hover:bg-green-200 border-2 p-2 mb-2 cursor-pointer" @click="approvalStore.showSuccess = false">
      <p class="font-semibold">
        👍🏻 Well done!
      </p>
      <p>
        All approvals have been granted.
      </p>
    </div>
  </div>
</template>
