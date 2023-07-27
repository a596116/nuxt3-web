<script lang="ts" setup>
import { collection } from '~/content/collection'

useHead(() => ({
  title: '作品集',
  meta: [
    {
      name: 'description',
      content: '浩呆作品集',
    },
  ],
}))
const route = useRoute()

const data = computed(() => {
  if (route.query.type) {
    return collection.filter((item) => item.title === route.query.type)
  }
  return collection
})
</script>

<template>
  <Wrapper :top="true">
    <HeadTitle title="作品集" :style="1" />
    <div
      v-for="(group, groupId) in data"
      :key="`link-group-${groupId}`"
      class="max-xs:w-full mx-auto mt-4 w-[65%] max-md:w-[85%]">
      <span class="ml-1 border-l-2 pl-3 text-lg font-normal">{{ group.title }}</span>
      <div class="mt-3 flex w-full flex-wrap justify-between gap-5">
        <div
          v-for="(item, itemId) in group.items"
          :key="`link-${itemId}`"
          class="w-[30%] cursor-pointer max-md:w-[48%] max-sm:w-full">
          <div
            class="min-h-[150px] rounded-xl border px-4 py-3 transition-[0.3s] hover:-translate-y-1 hover:border hover:shadow-lg">
            <Anchor :href="item.url" rel="noopener noreferrer" class="no-underline">
              <div class="flex w-full items-center">
                <span class="flex-1 text-ellipsis whitespace-nowrap font-semibold">
                  {{ item.sitename }}
                </span>
                <img
                  :src="item.img"
                  alt="浩呆"
                  class="h-[50px] w-[50px] rounded-[100%] p-2 shadow-[inset_0_0_10px_rgba(0,0,0,.3)]" />
              </div>
              <div
                class="mt-2 overflow-hidden text-ellipsis border-t border-dashed border-t-[#ddd] py-2.5 text-xs leading-4">
                {{ item.desc }}
              </div>
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
</template>
