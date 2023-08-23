<template>
  <Wrapper class="flex min-h-screen flex-1 justify-center">
    <section class="w-full">
      <span v-if="pending || error">Loading...</span>
      <SelectRadio v-model="state.tag" :lists="tagList" />
      <div
        v-for="(post, index) in state.tag == 'all' ? data?.posts : data?.postsByTag.get(state.tag)"
        :key="index"
        class="w-full transition-[0.3s] hover:-translate-y-1 hover:shadow-md">
        <Anchor
          class="relative my-6 flex w-full flex-wrap justify-between border p-4 py-6 max-sm:flex-col"
          :to="`/posts/${post.slug}`">
          <div class="mt-1 min-w-[100px] text-right max-sm:border-b">
            <div>{{ post.Date }}</div>
          </div>
          <div class="flex flex-1 flex-col gap-1 px-4 max-sm:my-4">
            <span class="text-xl font-semibold">{{ post.Title }}</span>
            <span class="text-sm">{{ post.desc }}</span>
          </div>
          <div class="">
            <el-tag
              v-for="(item, index) in post.Tags"
              :key="index"
              type="success"
              class="mx-1"
              effect="plain"
              round
              >{{ item }}
            </el-tag>
          </div>
        </Anchor>
      </div>
    </section>
  </Wrapper>
</template>

<script lang="ts" setup>
const { $notion } = useNuxtApp()

useHead(() => ({
  title: 'Blog',
}))

const state = reactive({
  tag: 'all',
})
const tagList = ref<any>([])

const { data, pending, error } = await useAsyncData('all_posts', async () => {
  const pageTable = await $notion.getPageTable('d324bdb8357444f78cde3ddae3b6bdcb')
  const posts = pageTable.sort((a: any, b: any) => a.Date - b.Date)

  const postsByTag = pageTable.reduce((map: any, currentPage: any) => {
    currentPage.Tags.forEach((tag: any) =>
      map.has(tag) ? map.set(tag, [...map.get(tag), currentPage]) : map.set(tag, [currentPage]),
    )
    return map
  }, new Map())

  return {
    posts,
    postsByTag,
    tags: [...postsByTag.keys()].sort(),
  }
})
nextTick(() => {
  tagList.value = ['all', ...data.value?.tags!]
})
</script>
