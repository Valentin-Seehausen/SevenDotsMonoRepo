import { acceptHMRUpdate, defineStore } from 'pinia'
import type Stack from 'types/Stack'
import type Token from 'types/Token'
import { useContractStore } from './contracts'
import { useTokenStore } from './token'
import { useWalletStore } from './wallet'

export const useStackingStore = defineStore('stackingStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const stackFactory = contracts.stackFactory()
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

  const stackTokens = async(token1: Token, token2: Token) => {
    if (!wallet.isConnected) return
    await token.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsStackFactory, token1.id)
    await token.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsStackFactory, token2.id)
    await stackFactory.connect(wallet.getSigner()).stackTokens(token1.id, token2.id)
    await loadStacks()
  }

  const unstack = async(stackId: number) => {
    if (!wallet.isConnected) return
    await stackFactory.connect(wallet.getSigner()).unstack(stackId)
    loadStacks()
    useTokenStore().loadUserTokens()
  }

  watch(() => wallet.account, () => loadStacks())

  return {
    stacks,
    unstack,
    loadStacks,
    stackTokens,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStackingStore, import.meta.hot))
