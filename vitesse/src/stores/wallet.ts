import { ethers } from 'ethers'
import { acceptHMRUpdate, defineStore } from 'pinia'
declare let window: any

export const useWalletStore = defineStore('wallet', () => {
  const isConnected = ref(false)
  const isMetaMaskInstalled = ref(false)
  const signer = ref<ethers.providers.JsonRpcSigner>()
  const chainId = ref()
  const account = ref('')

  const checkMetaMask = async() => {
    if (typeof window == 'undefined') return
    isMetaMaskInstalled.value = Boolean(window && window.ethereum && window.ethereum.isMetaMask)
  }

  const changeNetwork = async() => {
    try {
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }],
      })
    }
    catch (e) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x89', // 137
          chainName: 'Matic(Polygon) Mainnet',
          nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
          rpcUrls: ['https://polygon-rpc.com'],
          blockExplorerUrls: ['https://www.polygonscan.com/'],
        }],
      })
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }],
      })
    }
  }

  const checkConnection = async() => {
    if (typeof window == 'undefined') return
    const _accounts = await window.ethereum.request({
      method: 'eth_accounts',
    })
    if (_accounts.length > 0) {
      const _provider = new ethers.providers.Web3Provider(window.ethereum)
      const _signer = _provider.getSigner()
      signer.value = _signer
      chainId.value = await _signer.getChainId()
      isConnected.value = true
      account.value = _accounts[0]
      if (chainId.value !== 137)
        changeNetwork()
    }
  }

  const getSigner = () => {
    if (!isConnected.value) return
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return provider.getSigner()
  }

  const requestConnection = async() => {
    await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    checkConnection()
  }

  const accountName = computed(() =>
    `${account.value.substring(0, 5)}...${account.value.substring(account.value.length - 4)}`,
  )

  async function initWallet() {
    await checkMetaMask()
    await checkConnection()
  }

  return {
    isConnected,
    isMetaMaskInstalled,
    signer,
    account,
    accountName,
    requestConnection,
    initWallet,
    getSigner,
  }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWalletStore, import.meta.hot))
