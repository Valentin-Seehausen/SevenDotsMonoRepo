<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="text-center max-w-120 m-auto">
    <p>
      <img class="w-56 m-4 inline-block" alt="Dots" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNScgeD0nMTQnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PScxNycgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzcnIHg9JzIwJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvc3ZnPg==">
    </p>
    <p class="text-lg font-bold dark:font-normal my-4">
      Seven Dots
    </p>
    <ul class="mb-4 mt-8">
      <li>
        <strong>Creating beautiful NFTs</strong> with our Design System.
      </li>
      <li>
        <strong>Mint $7DOTS</strong> directly into your wallet.
      </li>
      <li>
        <strong>Multiply your staked $7DOTS</strong> with the early user multiplier.
      </li>
    </ul>
    <p>
      SevenDots is a purely user-driven NFT project. You drive this project. Users create their own NFTs by merging dots and get rewarded for this with a share of the treasury. 💰 80% of all revenue flows to the community and the community totally drives the projects.
    </p>
    <p class="mb-4 mt-8">
      Your main activity will be merging dots. The design system makes sure (nearly) everything you create will look great.
    </p>
    <p class="mt-12">
      <router-link to="/auctions">
        <button role="link" class="btn secondary">
          Buy dots
        </button>
      </router-link>
    </p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
