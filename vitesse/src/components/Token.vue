<script setup lang="ts">
import type Token from 'types/Token'
defineProps<{ token: Token }>()

</script>

<template>
  <router-link
    :to="`/token/${token.id}`"
  >
    <div role="link" class="hover:bg-black border-black dark:border-gray-400 border-4 hover:text-white">
      <img class="w-56 m-4 inline-block border-2 border-white dark:border-gray-400" alt="Dots" :src="token.image">
      <div class="px-4 py-8">
        <h3 class="">
          {{ token.name }}
        </h3>
      </div>
    </div>
  </router-link>
</template>
