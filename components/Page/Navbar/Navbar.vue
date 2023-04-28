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
  { type: 'link', text: 'Music', route: { name: 'music' } },
  {
    type: 'menu',
    text: t('pages.web.nav'),
    menu: [
      { type: 'link', text: t('pages.web.pages.1.title'), href: t('pages.web.pages.1.url') },
      { type: 'link', text: t('pages.web.pages.2.title'), href: t('pages.web.pages.2.url') },
      { type: 'link', text: t('pages.web.pages.3.title'), href: t('pages.web.pages.3.url') },
    ],
  },
])
</script>

<template>
  <NavbarBuilder>
    <template #menu>
      <div class="relative ml-4 box-border hidden w-full items-center justify-end lg:flex">
        <nav class="relative text-sm font-semibold leading-6" role="navigation">
          <ul class="flex h-full items-center">
            <li v-for="(item, i) in menus" :key="i" class="group relative mx-2">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="nav capitalize"
                :text="item.text" />
              <MenuDropDown
                v-else-if="item.type === 'menu'"
                :text="item.text"
                class="font-extrabold capitalize"
                :menu="item.menu" />
            </li>
          </ul>
        </nav>
        <div class="ml-6 flex space-x-4 border-l border-gray-900/10 pl-6">
          <!-- <LanguageSwitcher /> -->
          <!-- <ThemeSwitcher /> -->
          <Anchor
            class="hover:text-hd-hoverGreen flex items-center self-center text-lg hover:no-underline"
            href="https://github.com/a596116"
            title="Github">
            <svg-icon name="github"></svg-icon>
            <!-- <IconMdi:github /> -->
          </Anchor>
        </div>
      </div>
    </template>
    <template #drawer="{ toggleDrawer }">
      <div class="mt-[50px]">
        <nav class="font-semibold leading-6">
          <ul class="flex flex-col">
            <li
              v-for="(item, i) in menus"
              :key="i"
              class="flex w-full"
              :class="{
                'border-hd-Green mb-2 border-b pb-2': item.type === 'link',
              }">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="flex-1 capitalize hover:no-underline"
                :text="item.text"
                @click="toggleDrawer()" />
              <MenuDropDown
                v-else-if="item.type === 'menu'"
                :text="item.text"
                class="font-extrabold capitalize"
                :menu="item.menu"
                type="select-box"
                @click="toggleDrawer()" />
            </li>
          </ul>
        </nav>
      </div>
    </template>
  </NavbarBuilder>
</template>
