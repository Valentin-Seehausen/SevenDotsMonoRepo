<script setup lang="ts">
import type Token from 'types/Token'
defineProps<{ token: Token }>()

</script>

<template>
  <router-link
    :to="`/token/${token.id}`"
  >
    <div role="link" class="bg-white max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <img class="w-56 m-4 inline-block" alt="Dots" :src="token.image">
      </div>
      <div class="py-4 px-4 ">
        <h3 class="text-md font-semibold text-gray-600 overflow-hidden truncate">
          {{ token.name }}
        </h3>
      </div>
    </div>
  </router-link>
</template>
