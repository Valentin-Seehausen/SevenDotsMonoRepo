<script setup lang="ts">
import ApprovalWarner from '~/components/ApprovalWarner.vue'
</script>

<template>
  <NavBar />
  <main class="px-4 py-30">
    <ChainWarner />
    <ApprovalWarner />
    <router-view />
    <div class="mt-15 mx-auto text-center opacity-25 text-sm">
      Copyright 2022 Seven Dots
    </div>
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      This is a DAO in the making. Stay tuned.
    </div>
  </main>
</template>
