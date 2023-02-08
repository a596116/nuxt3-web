<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const { t } = useLang()
const app = useAppConfig() as AppConfigInput
const menus = computed((): IMenuItem[] => [
  { type: 'link', text: t('pages.blank.nav'), route: { name: 'blank' } },
  { type: 'link', text: t('pages.articles.nav'), route: { name: 'articles' } },
])
</script>

<template>
  <div
    class="fixed z-50 hidden w-full items-center justify-between bg-transparent px-10 py-4 lg:flex">
    <!-- title -->
    <NuxtLink
      tag="a"
      class="text-md mr-3 flex-none overflow-hidden font-bold text-gray-900 dark:text-gray-200 md:w-auto"
      :to="{ name: 'index' }">
      <span class="sr-only">home</span>
      <span class="flex items-center text-lg">
        <img src="~/assets/img/logo.png" alt="浩呆" class="text-primary-500 mx-5 w-10" />
        {{ app.name }}
      </span>
    </NuxtLink>

    <!-- menu -->
    <div class="flex items-center justify-center">
      <nav
        class="text-2xl font-semibold leading-6 text-gray-600 dark:text-gray-300"
        role="navigation">
        <ul class="flex items-center space-x-8">
          <li v-for="(item, i) in menus" :key="i" class="group relative mr-6 mb-1">
            <div
              class="absolute left-0 bottom-0 z-0 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow-400"></div>
            <Anchor
              v-if="item.type === 'link'"
              :to="item.route ? item.route : undefined"
              :href="item.href ? item.href : undefined"
              class="relative z-10 capitalize hover:text-slate-900 hover:no-underline hover:dark:text-white"
              >{{ item.text }}</Anchor
            >
            <button
              v-else-if="item.type === 'button'"
              :text="item.text"
              size="xs"
              class="font-extrabold capitalize"
              :to="item.route ? item.route : undefined"
              :href="item.href ? item.href : undefined" />
          </li>
        </ul>
      </nav>
      <div class="ml-6 flex space-x-4 border-l border-gray-900/10 pl-6 dark:border-gray-50/[0.2]">
        <LanguageSwitcher />
      </div>
    </div>
  </div>
</template>
