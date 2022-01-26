import { acceptHMRUpdate, defineStore } from 'pinia'
import type Token from 'types/Token'
import { useContractStore } from './contracts'
import { useWalletStore } from './wallet'

export const useStackingStore = defineStore('stackingStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const stackFactory = contracts.stackFactory()
  const token = contracts.token()

  const stackTokens = async(token1: Token, token2: Token) => {
    if (!wallet.isConnected) return
    await token.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsStackFactory, token1.id)
    await token.connect(wallet.getSigner()).approve(contracts.addresses.SevenDotsStackFactory, token2.id)
    await stackFactory.connect(wallet.getSigner()).stackTokens(token1.id, token2.id)
  }

  return {
    stackTokens,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWalletStore, import.meta.hot))
