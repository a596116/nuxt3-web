<template>
  <Wrapper class="bg-hd-Bg min-h-screen justify-center px-40">
    <span v-if="pending || error">Loading...</span>
    <SelectRadio v-model="state.tag" :lists="tagList" />
    <div>
      <section
        v-for="(post, index) in state.tag == 'all' ? data?.posts : data?.postsByTag.get(state.tag)"
        :key="index">
        <div class="my-4 flex space-x-6 rounded border p-5 hover:no-underline">
          <div class="mt-1 w-[100px] text-right">
            <div>{{ post.Date }}</div>
          </div>
          <Anchor
            class="flex w-[calc(100%-100px)] cursor-pointer flex-col p-4 transition hover:bg-gray-50 hover:bg-opacity-10 sm:rounded-2xl md:col-span-3 md:mx-0"
            :to="`/posts/${post.slug}`">
            <div class="text-xl font-semibold">
              {{ post.Title }}
            </div>
            <div class="flex">
              <section class="text-primary-500 text-hd-Green flex items-center space-x-1 text-sm">
                <span>{{ $t('others.learn_more') }}</span>
                <icon:ic:baseline-arrow-right-alt class="text-sm" />
              </section>
            </div>
          </Anchor>
        </div>
      </section>
    </div>
  </Wrapper>
</template>

<script lang="ts" setup>
const { $notion } = useNuxtApp()

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
