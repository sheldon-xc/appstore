<template>
  <div class="w-16">
    <div class="mx-auto item-icon w-16 h-16 mb-2">
      <NuxtImg class="w-16 h-16 rounded-2xl" :src="appItem['im:image'][2].label" />
    </div>
    <div class="item-info">
      <p class="truncate text-center text-sm">{{ appItem['im:name'].label }}</p>
      <p class="text-center text-xs text-gray-400">{{ appItem['category'].attributes.label }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  appItem: Object
})
</script>