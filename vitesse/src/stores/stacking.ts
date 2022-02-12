import { acceptHMRUpdate, defineStore } from 'pinia'
import type Stack from 'types/Stack'
import type Token from 'types/Token'
import { TYPE, useToast } from 'vue-toastification'
import { useApprovalStore } from './approvals'
import { useContractStore } from './contracts'
import { useTokenStore } from './token'
import { useWalletStore } from './wallet'

export const useStackingStore = defineStore('stackingStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const approvalStore = useApprovalStore()
  const stackFactory = contracts.stackFactory()
  const toast = useToast()
  const token = contracts.token()
  const stacks = ref<Stack[]>([])

  const loadStacks = async() => {
    stacks.value = await stackFactory.stacksOfOwner(wallet.account).then(stacks => stacks.map((stack) => {
      return {
        id: stack[0],
        tokenId1: stack[1],
        tokenId2: stack[2],
        owner: stack[3],
        stackTime: stack[4] * 1000,
      } as Stack
    }))
  }

  const checkApproval = async() => {
    if (approvalStore.token) return
    const tx = await token.connect(wallet.getSigner()).setApprovalForAll(contracts.addresses.SevenDotsStackFactory, true)
    const toastId = await toast('Waiting for approval to make you proud.')
    await tx.wait()
    await toast.update(toastId, { content: '🥁 Well done! Successfully approved! You can be proud.', options: { timeout: 4000, type: TYPE.SUCCESS } })
  }

  const stackTokens = async(token1: Token, token2: Token) => {
    if (!wallet.isConnected) return
    await checkApproval()
    const tx = await stackFactory.connect(wallet.getSigner()).instantStackTokens(token1.id, token2.id)
    const toastId = await toast('Merging tokens, its gonna be a-ma-zing!')
    await tx.wait()
    await toast.update(toastId, { content: '🥁 Merge done! Wow, your new NFT looks great.', options: { timeout: 4000, type: TYPE.SUCCESS } })
    useTokenStore().loadUserTokens()
  }

  const unstack = async(stackId: number) => {
    if (!wallet.isConnected) return
    const tx = await stackFactory.connect(wallet.getSigner()).unstack(stackId)
    const toastId = await toast('Claiming your freshly merged NFT from Merge.')
    await tx.wait()
    await toast.update(toastId, { content: '🎉 Successfully claimed NFT! It looks great.', options: { timeout: 4000, type: TYPE.SUCCESS } })
    loadStacks()
    useTokenStore().loadUserTokens()
  }

  const getMerge = async(tokenId: number) => {
    const events = await stackFactory.queryFilter(
      stackFactory.filters.Merge(tokenId),
    )
    stackFactory.filters.Merge()
    return events[0]
  }

  watchEffect(() => {
    if (wallet.isConnected)
      loadStacks()
  })

  return {
    stacks,
    unstack,
    loadStacks,
    stackTokens,
    getMerge,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStackingStore, import.meta.hot))
