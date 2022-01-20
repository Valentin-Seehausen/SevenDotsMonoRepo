import { ethers } from 'ethers'
import { acceptHMRUpdate, defineStore } from 'pinia'
declare let window: any

export const useWalletStore = defineStore('wallet', () => {
  const isConnected = ref(false)
  const isMetaMaskInstalled = ref(false)
  const signer = ref()
  const account = ref('')

  const checkMetaMask = async() => {
    const { ethereum } = window
    isMetaMaskInstalled.value = Boolean(ethereum && ethereum.isMetaMask)
  }

  const checkConnection = async() => {
    const _accounts = await window.ethereum.request({
      method: 'eth_accounts',
    })
    if (_accounts.length > 0) {
      signer.value = new ethers.providers.Web3Provider(window.ethereum)
      isConnected.value = true
      account.value = _accounts[0]
    }
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
  }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWalletStore, import.meta.hot))
