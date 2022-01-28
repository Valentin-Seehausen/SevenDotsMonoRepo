<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'
import constants from '~/constants/constants'
import { useStackingStore } from '~/stores/stacking'
import { useTokenStore } from '~/stores/token'
const { t } = useI18n()
const stackingStore = useStackingStore()

const tokens = useTokenStore()
const token1 = ref()
const token2 = ref()
const isVisible1 = ref(false)
const isVisible2 = ref(false)
const threshold = ref(Date.now() - constants.stackDuration)
const onStack = async() => {
  stackingStore.stackTokens(token1.value, token2.value)
}

const unstack = async(stackId: number) => {
  await stackingStore.unstack(stackId)
}

const onCountdownEnd = () => {
  threshold.value = Date.now() - constants.stackDuration
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
          <div class="btn secondary w-50 h-15 cursor-pointer flex p-1" @click="isVisible2 = !isVisible2">
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
          <div class="btn secondary w-50 h-15 cursor-pointer flex p-1" @click="isVisible1 = !isVisible1">
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
  <h2 class="mt-14 font-semibold ">
    {{ t("stacking.stacks") }}
  </h2>
  <div v-if="stackingStore.stacks.length > 0" class="mt-8 table w-100 p-1 rounded-t-md border-black border-2">
    <div class="table-header-group">
      <div class="table-row">
        <div class="table-cell text-left ">
          {{ t("stacking.topTokenId") }}
        </div>
        <div class="table-cell text-left ">
          {{ t("stacking.bottomTokenId") }}
        </div>
        <div class="table-cell text-left ">
          {{ t("stacking.ready") }}
        </div>
        <div class="table-cell text-left " />
      </div>
    </div>
    <div class="table-row-group divide-y divide-light-100">
      <div
        v-for="stack in stackingStore.stacks" :key="stack.id" class="table-row"
      >
        <div class="table-cell ">
          {{ stack.tokenId2 }}
        </div>
        <div class="table-cell ">
          {{ stack.tokenId1 }}
        </div>
        <div class="table-cell ">
          <vue-countdown v-if="stack.stackTime - threshold > 0" v-slot="{hours, minutes, seconds}" :time="stack.stackTime - threshold" @end="onCountdownEnd">
            {{ hours }}:{{ minutes }}:{{ seconds }}
          </vue-countdown>
          <button v-else class="btn" @click="unstack(stack.id)">
            {{ t("stacking.unstack") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="stackingStore.stacks.length == 0" class="table-cell table">
    {{ t("stacking.empty") }}
  </div>
</template>
