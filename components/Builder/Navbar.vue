<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

// state
const app = useAppConfig() as AppConfigInput
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)

// lifecycle
let timer: NodeJS.Timer
onMounted(() => {
  if (!navbar.value) return

  // scroll
  const { onScroll } = useSticky(navbar.value, 0)
  setTimeout(() => onScroll(), 50)

  // on show on mobile
  setInterval(() => {
    // must in mobile
    const minW = 1024
    if (window.innerWidth < minW) {
      updateDrawerOptions()
    }
  }, 100)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

// methods
const updateDrawerOptions = () => {
  // drawer
  if (showDrawer.value || showOptions.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}
const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
const toggleOptions = (show?: boolean) => {
  if (show) {
    showOptions.value = show
  } else {
    showOptions.value = !showOptions.value
  }
}
</script>

<template>
  <div
    ref="navbar"
    class="absolute top-0 z-40 w-full flex-none border-b border-gray-900/10 backdrop-blur-md backdrop-filter transition-colors duration-300 dark:border-gray-50/[0.2] lg:z-50">
    <div class="max-w-8xl mx-auto w-full">
      <div class="mx-4 py-3 lg:mx-0 lg:px-8">
        <div class="relative flex items-center">
          <!-- drawer:toggle -->
          <div
            v-if="$slots['drawer']"
            class="mr-2 flex items-center justify-center self-center lg:hidden">
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Drawer Menu"
              @click="toggleDrawer()">
              <span
                class="flex items-center text-lg text-gray-600 dark:text-gray-300"
                aria-hidden="true">
                <IconUil:bars v-if="!showDrawer" />
                <IconUil:times v-else />
              </span>
            </button>
          </div>
          <!-- title -->
          <slot name="title">
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
          </slot>
          <!-- menu -->
          <slot name="menu" />
          <!-- options:toggle -->
          <div v-if="$slots['options']" class="flex flex-1 justify-end lg:hidden">
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Options Menu"
              @click="toggleOptions()">
              <span
                class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                aria-hidden="true">
                <icon-fa-solid:ellipsis-v />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Teleport to="#app-after">
        <!-- drawer -->
        <Transition name="slide-fade-from-up" mode="out-in">
          <div
            v-if="showDrawer && $slots['drawer']"
            class="fixed top-0 left-0 z-30 flex h-screen w-screen flex-col bg-gray-100 pt-12 dark:bg-slate-800 lg:hidden">
            <div class="relative flex flex-1 flex-col overflow-y-auto">
              <slot name="drawer" :toggle-drawer="toggleDrawer" />
            </div>
          </div>
        </Transition>

        <!-- options -->
        <div v-if="showOptions && $slots['options']">
          <slot name="options" :toggle-options="toggleOptions" :show-options="showOptions" />
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.slide-fade-from-up-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-from-up-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-from-up-enter-from,
.slide-fade-from-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: theme('colors.slate.900');
}
html.dark {
  a.router-link-exact-active {
    color: theme('colors.white');
  }
}
</style>
