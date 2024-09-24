<template>
  <p class="px-4 mb-4 text-lg">Recommend</p>
  <div class="flex px-4 overflow-x-auto scroll-w-0 space-x-4 mb-4 border-b border-gray-200 pb-4">
    <div v-for="i in TGAppsList">
      <TopAppsItem :appItem="i" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  TGAppsList: Array
})
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>