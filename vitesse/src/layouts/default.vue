<script setup lang="ts">
import ApprovalWarner from '~/components/ApprovalWarner.vue'
const { t } = useI18n()
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
      <router-link to="/imprint">
        {{ t("button.imprint") }}
      </router-link>
    </div>
  </main>
</template>
