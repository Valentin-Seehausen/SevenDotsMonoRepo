import { acceptHMRUpdate, defineStore } from 'pinia'
import { useContractStore } from './contracts'
import { useWalletStore } from './wallet'

export const useTokenStore = defineStore('tokenStore', () => {
  const wallet = useWalletStore()
  const contracts = useContractStore()
  const token = contracts.token()
  const tokens = ref()

  const loadUserTokens = async() => {
    if (!wallet.isConnected) return

    const _tokens = <string[]>[]
    const promises = []
    const count = await token.balanceOf(wallet.account)
    for (let i = 0; i < count; i++) {
      promises.push(
        token.tokenOfOwnerByIndex(
          wallet.account, i).then(
          id => token.tokenURI(id)).then(uri => _tokens.push(JSON.parse(window.atob(uri.substring(29))))))
    }
    await Promise.all(promises)
    console.log(_tokens)
    tokens.value = _tokens
  }

  watch(() => wallet.account, () => loadUserTokens())

  return { tokens, loadUserTokens }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWalletStore, import.meta.hot))
