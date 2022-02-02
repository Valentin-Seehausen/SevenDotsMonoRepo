<script setup lang="ts">
import { ref } from 'vue'
import { isDark, toggleDark } from '~/composables'
const { t } = useI18n()
const router = useRouter()

const showMenu = ref(false)
const toggleNav = () => (showMenu.value = !showMenu.value)

router.beforeEach(() => { showMenu.value = false })
</script>

<template>
  <div class="overflow-visible h-20 z-50 fixed inset-x-0 top-0">
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link
          to="/"
          :title="t('button.sevenDots')"
          class="font-semibold text-xl tracking-tight"
        >
          {{ t("button.sevenDots") }}
        </router-link>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          @click="toggleNav"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        :class="{ '<lg:hidden': !showMenu }"
      >
        <div class="lg:flex-grow">
          <router-link
            to="/auctions"
            :title="t('button.auctions')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 lg:mr-4"
          >
            {{ t("button.auctions") }}
          </router-link>
          <router-link
            to="/token"
            :title="t('button.token')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 lg:mr-4"
          >
            {{ t("button.token") }}
          </router-link>
          <router-link
            to="/stacking"
            :title="t('button.stacking')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 lg:mr-4"
          >
            {{ t("button.stacking") }}
          </router-link>
          <router-link
            to="/staking"
            :title="t('button.staking')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 lg:mr-4"
          >
            {{ t("button.staking") }}
          </router-link>
          <router-link
            to="/treasury"
            :title="t('button.staking')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 lg:mr-4"
          >
            {{ t("button.treasury") }}
          </router-link>
          <router-link
            to="/whitepaper"
            :title="t('button.whitepaper')"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
          >
            {{ t("button.whitepaper") }}
          </router-link>
        </div>
        <div>
          <button
            class="icon-btn mx-2 !outline-none rounded-full bg-light-50 p-1.5 align-top hidden"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
          >
            <carbon-moon v-if="isDark" />
            <carbon-sun v-else />
          </button>
          <WalletButton />
        </div>
      </div>
    </nav>
  </div>
</template>
