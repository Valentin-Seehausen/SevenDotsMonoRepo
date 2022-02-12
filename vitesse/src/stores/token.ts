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
    const count = await (await token.balanceOf(wallet.account)).toNumber()
    for (let i = 0; i < count; i++) {
      promises.push(
        token.tokenOfOwnerByIndex(wallet.account, i).then(
          tokenId => token.tokenURI(tokenId)).then(
          (uri) => {
            const token = JSON.parse(window.atob(uri.substring(29))) as Token
            token.id = parseInt(token.name.substring(1))
            token.dna = token.attributes.find(a => a.trait_type === 'DNA')?.value || ''
            token.rarityPoints = parseInt(token.attributes.find(a => a.trait_type === 'Rarity Points')?.value || '0')
            token.dots = parseInt(token.attributes.find(a => a.trait_type === 'Dots')?.value || '0')
            if (!token) return
            _tokens.push(token)
          }),
      )
    }
    await _tokens.reverse()
    await Promise.all(promises)
    tokens.value = _tokens
    isLoading.value = false
  }

  const getToken = async(tokenId: number) => {
    try {
      const tokenUri = await token.tokenURI(tokenId)
      const _token = JSON.parse(window.atob(tokenUri.substring(29))) as Token
      if (!_token) return
      _token.id = parseInt(_token.name.substring(1))
      _token.dna = _token.attributes.find(a => a.trait_type === 'DNA')?.value || ''
      _token.rarityPoints = parseInt(_token.attributes.find(a => a.trait_type === 'Rarity Points')?.value || '0')
      _token.dots = parseInt(_token.attributes.find(a => a.trait_type === 'Dots')?.value || '0')
      return _token
    }
    catch (e) {
      return undefined
    }
  }

  watchEffect(() => {
    if (wallet.isConnected)
      loadUserTokens()
  })

  return { tokens, isLoading, getToken, loadUserTokens }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTokenStore, import.meta.hot))
