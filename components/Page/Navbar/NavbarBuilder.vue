<script lang="ts" setup>
import gsap from 'gsap'
// state
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)

const menuUp = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
const menuDown = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
let tl: gsap.core.Timeline
const toggleDrawer = () => {
  if (!tl) {
    tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.5, ease: 'power1.easeInOut' },
    })
    tl.fromTo(
      '.drawer',
      { clipPath: menuUp, visibility: 'hidden' },
      { clipPath: menuDown, visibility: 'visible' },
      0,
    )
  }
  if (!showDrawer.value) {
    tl?.play()
    showDrawer.value = true
    document.body.style.overflow = 'hidden'
  } else {
    tl?.reverse()
    showDrawer.value = false
    document.body.style.overflow = 'auto'
  }
}
</script>

<template>
  <div ref="navbar" class="fixed top-0 z-[99] w-full flex-none duration-300">
    <div class="max-w-8xl mx-auto flex w-full flex-col items-center">
      <section
        class="min-h-10 bg-hd-black [&:has(.navbar.active)]:bg-hd-black flex h-full w-full justify-center duration-500">
        <div class="flex w-full">
          <!-- 小屏 -->
          <article class="flex h-[44px] w-full px-2 lg:hidden">
            <Anchor to="/" class="flex items-center">
              <svg-icon name="logo-1" class="h-7 w-7"></svg-icon>
            </Anchor>
            <div
              v-if="$slots['drawer']"
              class="toggle ml-auto flex items-center justify-center self-center"
              @click="toggleDrawer"
              :class="{ active: showDrawer }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>
          <!-- 大屏 -->
          <slot name="menu" class="max-lg:hidden" />
        </div>
      </section>
      <!-- <Breadcrumb /> -->
    </div>
    <!-- drawer -->
    <section class="drawer">
      <slot name="drawer" v-if="showDrawer && $slots['drawer']" :toggle-drawer="toggleDrawer" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
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
:deep(a).nav:not(.router-link-active):hover {
  &::before {
    @apply w-[70%];
    transform: scaleX(100%);
  }
}

// togggle
.toggle {
  @apply relative left-0 right-[10px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center overflow-hidden rounded-[10px] transition-[5s];
  z-index: 3000;
  span {
    @apply bg-hd-white absolute h-[2px] w-[30px] rounded-[4px];
    transition: 0.5s;
    &:nth-child(1) {
      transform: translateY(-10px);
      width: 20px;
      left: 4px;
    }
    &:nth-child(2) {
      transform: translateY(10px);
      width: 10px;
      left: 4px;
    }
  }
  &.active {
    span {
      &:nth-child(1) {
        width: 30px;
        transform: translateY(0px) rotate(45deg);
        transition-delay: 0.125s;
      }
      &:nth-child(2) {
        width: 30px;
        transform: translateY(0px) rotate(315deg);
        transition-delay: 0.25s;
      }
      &:nth-child(3) {
        transform: translateX(60px);
      }
    }
  }
}

.drawer {
  @apply bg-hd-black absolute top-0 h-screen w-full;
  visibility: hidden;
}
</style>
