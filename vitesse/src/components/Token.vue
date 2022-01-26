<script setup lang="ts">
import type Token from 'types/Token'
defineProps<{ token: Token }>()

</script>

<template>
  <router-link
    :to="`/token/${token.id}`"
  >
    <div role="link">
      <img class="w-56 m-2 inline-block hover:scale-102 hover:shadow-lg transform-gpu transition duration-300" alt="Dots" :src="token.image">
    </div>
    <div class="px-4 ">
      <h3 class="text-md font-semibold text-gray-600 overflow-hidden truncate">
        {{ token.name }}
      </h3>
    </div>
  </router-link>
</template>
