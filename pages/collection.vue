<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

useHead(() => ({
  title: capitalize(t('pages.collection.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.collection.description'),
    },
  ],
}))
const lists = [
  {
    title: 'Web',
    items: [
      {
        sitename: '後台管理系統',
        url: 'https://haodai-web.web.app/admin',
        img: 'https://s2.loli.net/2023/02/08/X8yiSYwTF1CENme.png',
        desc: '使用Vue3、echarts、Element plus、axios、pinia、firebase串接後台API開發的後台系統',
      },
      {
        sitename: '個人博客',
        url: 'https://wanghaodai.com/',
        img: 'https://s2.loli.net/2023/02/08/KjLxycGCJoOM43s.png',
        desc: 'VuePress搭建的博客網站，存放學習資料',
      },
      {
        sitename: '畢業專題介紹',
        url: 'https://puds-12564.web.app/home',
        img: 'https://s2.loli.net/2023/02/08/M6BH5PkFOsbC2TQ.png',
        desc: '靜宜大學-資料科學暨大數據分析與應用學系-深度學習在太陽光電模組的熱影像缺陷自動識別系統的介紹網頁',
      },
    ],
  },
  {
    title: 'API',
    items: [
      {
        sitename: 'Nodejs後端',
        url: 'https://github.com/a596116/nestjs',
        img: 'https://s2.loli.net/2023/02/08/qgFMnxeBVuEH13G.png',
        desc: '使用Nestjs搭配Mongodb資料庫開發RESTful API',
      },
    ],
  },
  {
    title: 'LineBot',
    items: [
      {
        sitename: '寵愛',
        url: 'https://github.com/a596116/petLove',
        img: 'https://s2.loli.net/2023/02/08/hBcqA3fopYHQnxj.png',
        desc: '使用python + Django + Web 開發的LineBot',
      },
    ],
  },
]
</script>

<template>
  <Wrapper class="bg-hd-Bg">
    <HeadTitle :title="$t('pages.collection.title')" :style="1" />
    <div
      v-for="(group, groupId) in lists"
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
