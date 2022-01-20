import { ethers } from 'ethers'
import { acceptHMRUpdate, defineStore } from 'pinia'
declare let window: any

export const useWalletStore = defineStore('wallet', () => {
  const isLoading = ref(false)
  const isConnected = ref(false)
  const isMetaMaskInstalled = ref(false)
  const provider = ref<ethers.providers.Web3Provider>()
  const signer = ref<ethers.Signer>()
  const account = ref('')

  const checkMetaMask = () => {
    const { ethereum } = window
    isMetaMaskInstalled.value = Boolean(ethereum && ethereum.isMetaMask)
    provider.value = new ethers.providers.Web3Provider(window.ethereum)
    signer.value = provider.value.getSigner()
  }

  const checkConnection = async() => {
    const _accounts = await window.ethereum.request({
      method: 'eth_accounts',
    })
    isConnected.value = Boolean(_accounts.length > 0)
    account.value = _accounts[0]
  }

  const requestConnection = async() => {
    const _accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    isConnected.value = Boolean(_accounts.length > 0)
    account.value = _accounts[0]
  }

  const accountName = computed(() =>
    `${account.value.substring(0, 5)}...${account.value.substring(account.value.length - 4)}`,
  )

  async function initWallet() {
    await checkMetaMask()
    await checkConnection()
  }

  return {
    isLoading,
    isConnected,
    isMetaMaskInstalled,
    provider,
    signer,
    account,
    accountName,
    requestConnection,
    initWallet,
  }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWalletStore, import.meta.hot))
