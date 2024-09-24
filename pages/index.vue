<template>
  <Search @searchChange="searchChange" />
  <TopApps :TGAppsList="TGAppsList" />
  <ListApps :TFAppsList="AppList" />
</template>

<script setup>

const baseUrl = 'https://itunes.apple.com/'

const searchQuery = ref('')

// 获取顶部推荐 10 个 App
const TGLimit = 10
const { data: TGApps } = await useFetch(`${baseUrl}hk/rss/topgrossingapplications/limit=${TGLimit}/json`)
const TGAppsList = JSON.parse(TGApps.value).feed.entry
// console.log(TGAppsList)

// 获取榜单 100 个 App
const TFLimit = 100
const { data: TFApps } = await useFetch(`${baseUrl}hk/rss/topfreeapplications/limit=${TFLimit}/json`)
const TFAppsObj = JSON.parse(TFApps.value).feed
// console.log(TFAppsObj)

// 获取推荐的 100 个 App 的 id
const ids = TFAppsObj.entry.map(item => item.id.attributes['im:id'])
// console.log(ids)

// 根据 id 获取所有 id 的应用详情
const { data: lookup } = await useFetch(`${baseUrl}hk/lookup?id=${ids}`)
const TFAppsList = JSON.parse(lookup.value).results
// console.log(TFAppsList)

const searchChange = (val) => {
  searchQuery.value = val
}

// 根据搜索的字符串筛选符合要求的 App
const AppList = computed(() => {
  const searchString = searchQuery.value.toLowerCase()
  return TFAppsList.filter(item => {
    return (
      item.trackName.toLowerCase().includes(searchString) ||
      item.description.toLowerCase().includes(searchString) ||
      item.sellerName.toLowerCase().includes(searchString) ||
      String(item.trackId).includes(searchString)
    )
  })
})

console.log(AppList)
</script>