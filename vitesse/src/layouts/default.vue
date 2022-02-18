<script setup lang="ts">
import ApprovalWarner from '~/components/ApprovalWarner.vue'
</script>

<template>
  <NavBar />
  <main class="px-4 py-30 max-w-340 m-auto">
    <ChainWarner />
    <ApprovalWarner />
    <router-view />
    <div class="mt-15 mx-auto text-center opacity-25 text-sm">
      Copyright 2022 Seven Dots
    </div>
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      This is a DAO in the making. Stay tuned.
    </div>
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      <a href="https://few-poet-482.notion.site/f38577553207478798ead38778eb5f03?v=bf96efb3741b4b6ca332ad0e76ba2769" target="_blank">Roadmap</a>
    </div>
  </main>
</template>
