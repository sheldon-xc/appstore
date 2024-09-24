<template>
  <div class="px-4 py-4">
    <input
      class="block w-full rounded-3xl bg-slate-200 appearance-none py-2 px-4 text-slate-900 placeholder:text-slate-600 focus:outline-none text-sm leading-6"
      type="text"
      placeholder="Search your app..."
      v-model="searchQuery"
      @input="onSearchInput" />
  </div>
</template>

<script setup>
import { useDebounceFn } from '@vueuse/core'
const emit = defineEmits(['searchChange']);

const searchQuery = ref('')

const onSearchInput = () => {
  debouncedFilter()
}

const filterFunc = () => {
  emit('searchChange', searchQuery.value)
}

const debouncedFilter = useDebounceFn(filterFunc, 1000)

window?.addEventListener('resize', debouncedFilter)
</script>