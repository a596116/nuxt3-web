<script setup lang="ts">
const route = useRoute()
const { $notion } = useNuxtApp()

const lists = useState<string[]>('postList', () => ['1'])

const a = ref('')
const { data, pending } = useAsyncData(`notion-${route.params.id}`, async () => {
  const pageTable = await $notion.getPageTable('d324bdb8357444f78cde3ddae3b6bdcb')
  const posts = pageTable.sort((a: any, b: any) => a.Date - b.Date)
  nextTick(() => {
    lists.value = posts.reduce((map: any, currentPage: any) => {
      map.push(currentPage.slug)
      return map
    }, new Array())
  })
  const title = pageTable.find((item: any) => item.slug === route.params.id).Title
  console.log(title)
  document.title = `${title} - 浩呆前端`
  return $notion.getPageBlocks(route.params.id.toString())
})
const { mapPageUrl, pageLinkOptions } = useProps()
// console.log(mapPageUrl, pageLinkOptions.value)

const index = lists.value.findIndex((item: any) => item === route.params.id)
const actions = {
  prev: () => {
    if (index > 0) {
      navigateTo(`/posts/${lists.value[index - 1]}`)
    }
  },
  next: () => {
    if (index < useState<string[]>('postList').value.length - 1) {
      navigateTo(`/posts/${lists.value[index + 1]}`)
    }
  },
}
</script>

<template>
  <section class="bg-hd-bg min-h-screen">
    <!-- <div class="mx-20 my-10">
      <el-button @click="actions.prev">上一篇</el-button>
      <el-button @click="actions.next">下一篇</el-button>
    </div> -->
    <div v-if="pending">
      <Vue3Lottie
        animationLink="https://assets6.lottiefiles.com/private_files/lf30_cgui8ggd.json"
        :height="200"
        :width="200" />
    </div>
    <div v-else>
      <NotionRenderer
        :blockMap="data"
        fullPage
        prism
        katex
        :mapPageUrl="mapPageUrl"
        :pageLinkOptions="pageLinkOptions" />
    </div>
  </section>
</template>
