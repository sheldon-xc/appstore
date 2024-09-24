<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtPwaManifest />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </ConfigProvider>
</template>

<script setup>
import { ConfigProvider } from 'radix-vue'

const useIdFunction = () => useId()
</script>
