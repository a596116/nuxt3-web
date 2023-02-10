<script lang="ts" setup>
export interface IMenuItem {
  type: 'link' | 'menu'
  text?: string
  href?: any
  route?: any
  menu?: IMenuItem[]
}

const { t } = useLang()

const menus = computed((): IMenuItem[] => [
  { type: 'link', text: t('pages.about.nav'), route: { name: 'about' } },
  { type: 'link', text: t('pages.collection.nav'), route: { name: 'collection' } },
  { type: 'link', text: t('pages.articles.nav'), route: { name: 'articles' } },
  {
    type: 'menu',
    text: '網站',
    menu: [
      { type: 'link', text: '博客', href: 'https://wanghaodai.com/' },
      { type: 'link', text: '後台管理系統', href: 'https://haodai-web.web.app/admin' },
      { type: 'link', text: '網頁音樂', href: 'https://haodai-web.web.app/music' },
    ],
  },
])
</script>

<template>
  <BuilderNavbar>
    <template #menu>
      <div class="relative ml-auto hidden items-center lg:flex">
        <nav class="text-xl font-semibold leading-6 text-gray-300" role="navigation">
          <ul class="flex items-center">
            <li v-for="(item, i) in menus" :key="i" class="group relative mx-6 mb-1">
              <div
                class="absolute left-0 bottom-0 z-0 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow-400"></div>
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="capitalize hover:text-slate-900 hover:no-underline hover:dark:text-white"
                >{{ item.text }}</Anchor
              >
              <MenuDropDown
                v-else-if="item.type === 'menu'"
                :text="item.text"
                class="font-extrabold capitalize"
                :menu="item.menu" />
            </li>
          </ul>
        </nav>
        <div class="ml-6 flex space-x-4 border-l border-gray-900/10 pl-6 dark:border-gray-50/[0.2]">
          <LanguageSwitcher />
          <!-- <ThemeSwitcher /> -->
          <Anchor
            class="flex items-center self-center text-lg hover:text-slate-900 hover:no-underline hover:dark:text-white"
            href="https://github.com/a596116"
            title="Github">
            <IconMdi:github />
          </Anchor>
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @on-close="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Menu" />
          <nav class="font-semibold leading-6 text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex w-full"
                :class="{
                  'mb-2 border-b border-gray-900/10 pb-2 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }">
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="flex-1 capitalize hover:no-underline"
                  >{{ item.text }}</Anchor
                >
                <MenuDropDown
                  v-else-if="item.type === 'menu'"
                  :text="item.text"
                  class="font-extrabold capitalize"
                  :menu="item.menu"
                  type="select-box" />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.language_switcher.change_language') }}
          </div>
          <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div>
        </ActionSheetBody>
        <Button type="secondary" title="Github" href="https://github.com/a596116">
          <IconMdi:github-face />
          <span class="ml-1">Github</span>
        </Button>
        <Button type="secondary" title="Instagram" href="https://www.instagram.com/haodai_0621/">
          <IconMdi:instagram />
          <span class="ml-1">Instagram</span>
        </Button>
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>
