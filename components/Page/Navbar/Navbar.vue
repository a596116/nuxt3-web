<script lang="ts" setup>
import gsap from 'gsap'
import { menus } from '~/content/menus'

const childrenMenu = ref<any[]>([])

const handleClickMenu = (cmenu: any) => {
  childrenMenu.value = cmenu
}
const isOpen = ref(false)
const openHeight = ref('44px')
let tl: gsap.core.Timeline | null = null
const dropdown = (type: boolean, cmenu?: any) => {
  if (type) {
    const max = Math.max(...cmenu.map((item: any) => item.children?.length || 0))
    openHeight.value = max * 32 + 28 + 48 + 44 + 'px'
    isOpen.value = true
    if (childrenMenu.value != toRef(cmenu).value) {
      childrenMenu.value = cmenu
      tl?.clear()
      nextTick(() => {
        tl = gsap.timeline({
          paused: true,
          defaults: { duration: 0.1, ease: 'power1.inOut' },
        })
        tl.fromTo(
          '.cmenu-item',
          { opacity: 0, y: '-0.5em', stagger: 0.1 },
          { opacity: 1, y: '0em', stagger: 0.1 },
          0,
        )
        tl?.play()
      })
    }
  } else {
    openHeight.value = '44px'
    isOpen.value = false
    childrenMenu.value = []
    tl?.reverse()
  }
}
</script>

<template>
  <NavbarBuilder>
    <template #menu>
      <div
        class="navbar box-border hidden w-full flex-col items-start justify-center text-white lg:flex"
        :class="{ active: isOpen }"
        @mouseleave="dropdown(false)">
        <nav class="h-full w-full text-xs leading-6" role="navigation">
          <ul class="flex h-[44px] w-full flex-wrap items-center justify-between">
            <Anchor to="/" class="flex items-center" @mouseenter="dropdown(false)">
              <svg-icon name="logo-1" class="h-7 w-7"></svg-icon>
            </Anchor>
            <div
              v-for="(item, i) in menus"
              :key="i"
              class="group flex h-full cursor-pointer items-center font-bold">
              <li class="menu flex h-full">
                <Anchor
                  v-if="!item.children?.length"
                  :to="item.link ? item.link : undefined"
                  class="nav center flex-1 px-2 py-2 capitalize"
                  :text="item.name"
                  :hover="false"
                  :duration="false"
                  @mouseenter="dropdown(false)" />
                <span
                  v-else
                  :to="item.link ? item.link : undefined"
                  class="nav center flex-1 px-2 py-2 capitalize"
                  @mouseenter="dropdown(true, item.children)">
                  {{ item.name }}
                </span>
              </li>
            </div>
          </ul>
          <div class="cmenu flex gap-6">
            <section
              v-for="(item, index) in childrenMenu"
              :key="index"
              class="cmenu-item flex cursor-pointer flex-col items-start gap-2 whitespace-nowrap rounded-md py-6">
              <Anchor
                :to="item.link ? item.link : undefined"
                :text="item.name"
                class="text-lg hover:text-white/50" />
              <Anchor
                v-for="chi of item.children"
                :to="chi.link ? chi.link : undefined"
                :text="chi.name"
                class="text-base text-white hover:text-white/50" />
            </section>
          </div>
        </nav>
      </div>
    </template>

    <template #icon>
      <div class="text-hd-primary relative hidden gap-7 pl-4 lg:flex"></div>
    </template>
    <template #drawer="{ toggleDrawer }">
      <div
        v-if="childrenMenu.length"
        @click="childrenMenu = []"
        class="center absolute h-[44px] w-[44px]">
        <svg-icon name="left" class="h-[30px] w-[30px]"></svg-icon>
      </div>
      <div class="text-hd-white h-screen pt-[44px]">
        <!-- <Search type="open" class="my-4" /> -->
        <TransitionGroup name="checkout-up" appear>
          <nav v-if="childrenMenu?.length" class="flex flex-col gap-4 text-white/50">
            <section v-for="(item, index) of childrenMenu" :key="index" class="mt-6">
              <Anchor
                v-if="!item.children?.length"
                :to="item.link"
                :text="item.name"
                @click="toggleDrawer()"
                class="flex items-center px-5 text-sm" />
              <div v-else class="flex flex-col gap-4">
                <Anchor
                  :to="item.link"
                  :text="item.name"
                  @click="toggleDrawer()"
                  class="flex items-center px-5 text-sm" />
                <div v-for="(citem, cindex) of item.children" :key="cindex">
                  <Anchor
                    :to="citem.link"
                    :text="citem.name"
                    @click="toggleDrawer()"
                    class="flex items-center px-5 text-xl text-white" />
                </div>
              </div>
            </section>
          </nav>
          <nav v-else class="h-full w-full text-xl leading-6" role="navigation">
            <ul class="flex h-full w-full flex-col flex-wrap">
              <div
                v-for="(item, i) in menus"
                :key="i"
                class="group flex cursor-pointer items-center font-bold duration-300">
                <li class="menu flex h-full w-full px-10 py-2">
                  <Anchor
                    v-if="!item.children?.length"
                    :to="item.link ? item.link : undefined"
                    class="nav flex-1 px-2 py-2 capitalize"
                    :text="item.name"
                    :hover="false"
                    @click="toggleDrawer()"
                    :duration="false" />
                  <span
                    v-else
                    class="nav h-full w-full flex-1 px-2 py-2"
                    @click="handleClickMenu(item.children)"
                    >{{ item.name }}
                  </span>
                </li>
              </div>
            </ul>
          </nav>
        </TransitionGroup>
      </div>
    </template>
  </NavbarBuilder>
</template>
<style lang="scss" scoped>
.menu {
  --el-menu-active-color: var(--hd-primary);
  .el-menu-item:hover,
  :deep(.el-sub-menu__title):hover {
    background-color: transparent !important;
  }
  :deep(.el-sub-menu__icon-arrow) {
    display: none;
  }
}
.nav:not(:last-child) {
  &::after {
    content: '';
    @apply absolute right-0 top-1/2 h-1/2 w-[1px] -translate-y-1/2 bg-white;
  }
}
.navbar {
  @apply transition-[.5s];
  height: 44px;
  &.active {
    // height: 200px;
    height: v-bind(openHeight);
  }
}
</style>
