import { acceptHMRUpdate, defineStore } from 'pinia'
import type Token from 'types/Token'
import { useContractStore } from './contracts'
import { useWalletStore } from './wallet'

export const useTokenStore = defineStore('tokenStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const token = contracts.token()
  const tokens = ref<Token[]>([])
  const isLoading = ref(false)

  const loadUserTokens = async() => {
    if (!wallet.isConnected) return
    isLoading.value = true
    const _tokens = <Token[]>[]
    const promises = []
    const count = await token.balanceOf(wallet.account)
    for (let i = 0; i < count; i++) {
      promises.push(
        token.tokenOfOwnerByIndex(wallet.account, i).then(
          tokenId => token.tokenURI(tokenId)).then(
          (uri) => {
            const token = JSON.parse(window.atob(uri.substring(29))) as Token
            token.id = parseInt(token.name.substring(1))
            if (!token) return
            _tokens.push(token)
          }),
      )
    }
    await Promise.all(promises)
    tokens.value = _tokens
    isLoading.value = false
  }

  watchEffect(() => {
    if (wallet.isConnected)
      loadUserTokens()
  })

  return { tokens, isLoading, loadUserTokens }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWalletStore, import.meta.hot))
