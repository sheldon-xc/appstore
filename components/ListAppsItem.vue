<template>
  <div class="flex space-x-2">
    <div class="item-no flex items-center w-6 text-center shrink-0 text-xs text-gray-400">{{ idx }}</div>
    <div class="item-icon w-12 h-12 shrink-0 ">
      <NuxtImg class="w-12 h-12" :src="appItem.artworkUrl100" />
    </div>
    <div class="item-info flex-1 shrink-0 width-0 overflow-auto pr-4">
      <p class="truncate text-sm">{{ appItem.trackName }}</p>
      <p class="text-xs text-gray-400">{{ appItem.genres[0] }}</p>
      <div class="flex text-xs text-gray-400 items-center gap-2">
        <NuxtRating :ratingSize="13" :inline="true" :read-only="true" :rating-value="appItem.averageUserRating" />({{ appItem.userRatingCount }})
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  appItem: Object,
  idx: Number
})
</script>