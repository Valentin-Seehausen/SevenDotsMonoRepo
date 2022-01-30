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
      Please approve SevenDots smart contracts for a smoots user experience. You will be asked to sign four (4) transaction and make sure all succeed.
    </div>
  </div>
</template>
