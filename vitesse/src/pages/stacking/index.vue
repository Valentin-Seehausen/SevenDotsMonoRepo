<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'
import { useStackingStore } from '~/stores/stacking'
import { useTokenStore } from '~/stores/token'
const { t } = useI18n()
const stackingStore = useStackingStore()

const tokens = useTokenStore()
const token1 = ref()
const token2 = ref()
const isVisible1 = ref(false)
const isVisible2 = ref(false)
const onStack = async() => {
  stackingStore.stackTokens(token1.value, token2.value)
}
</script>

<template>
  <div class="md:flex">
    <div class="flex-1">
      <div>
        Top:
      </div>
      <div class="relative">
        <OnClickOutside @trigger="isVisible2 = false">
          <div class="border-black border-2 bg-gray-100 hover:bg-gray-200 w-50 h-15 cursor-pointer flex p-1" @click="isVisible2 = !isVisible2">
            <img v-if="token2" class="w-12 h-12" alt="Dots" :src="token2.image">
            <div v-if="token2" class="p-1">
              {{ token2.name }}
            </div>
            <div v-else class="p-1">
              {{ t("stacking.selectToken") }}
            </div>
          </div>
          <div class="border-black border-2 shadow-lg z-40 bg-gray-50 grid grid-cols-1 divide-y w-50 border-t-0 top-14 absolute overflow-y-scroll h-60" :class="{hidden: !isVisible2}">
            <div v-for="token in tokens.tokens" :key="token.id" class="flex p-1 hover:bg-gray-100 cursor-pointer" @click="token2 = token; isVisible2 = false">
              <img class="w-12" alt="Dots" :src="token.image">
              <div class="p-1">
                {{ token.name }}
              </div>
            </div>
          </div>
        </OnClickOutside>
      </div>
    </div>
    <div class="flex-1">
      <div>
        Bottom:
      </div>
      <div class="relative">
        <OnClickOutside @trigger="isVisible1 = false">
          <div class="border-black border-2 bg-gray-100 hover:bg-gray-200 w-50 h-15 cursor-pointer flex p-1" @click="isVisible1 = !isVisible1">
            <img v-if="token1" class="w-12 h-12" alt="Dots" :src="token1.image">
            <div v-if="token1" class="p-1">
              {{ token1.name }}
            </div>
            <div v-else class="p-1">
              {{ t("stacking.selectToken") }}
            </div>
          </div>
          <div class="border-black border-2 shadow-lg z-40 bg-gray-50 grid grid-cols-1 divide-y w-50 border-t-0 top-14 absolute overflow-y-scroll h-60" :class="{hidden: !isVisible1}">
            <div v-for="token in tokens.tokens" :key="token.id" class="flex p-1 hover:bg-gray-100 cursor-pointer" @click="token1 = token; isVisible1 = false">
              <img class="w-12" alt="Dots" :src="token.image">
              <div class="p-1">
                {{ token.name }}
              </div>
            </div>
          </div>
        </OnClickOutside>
      </div>
    </div>
    <div class="flex-1 self-end">
      <button class="btn block ml-0 mt-2 w-50" @click="onStack">
        {{ t("stacking.createStack") }}
      </button>
    </div>
  </div>
</template>
