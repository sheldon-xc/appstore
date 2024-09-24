<template>
  <div class="pl-4">
    <div class="list-app-item mb-4 pb-4 border-b border-gray-200" v-for="(i, idx) in TFAppsList">
      <ListAppsItem :appItem="i" :idx="idx + 1" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  TFAppsList: Array
})
</script>

<style>
.list-app-item:nth-child(odd) img {
  border-radius: 1rem;
}

.list-app-item:nth-child(even) img {
  border-radius: 50%;
}
</style>
