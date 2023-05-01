<script lang="ts" setup>
// state
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)

const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
</script>

<template>
  <div ref="navbar" class="fixed top-0 z-[99] w-full flex-none bg-white duration-300">
    <div class="max-w-8xl mx-auto w-full">
      <div class="mx-4 py-3 lg:mx-0">
        <div class="relative flex items-center justify-between">
          <div
            v-if="$slots['drawer']"
            class="toggle mr-2 flex items-center justify-center self-center lg:hidden"
            @click="showDrawer = !showDrawer"
            :class="{ active: showDrawer }">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <!-- title -->
          <slot name="title">
            <Anchor
              to="/"
              class="logo absolute left-1/2 -translate-x-[50%] lg:relative lg:left-0 lg:translate-x-0">
              <svg-icon name="logo" class="h-14 w-28"></svg-icon>
            </Anchor>
          </slot>
          <!-- menu -->
          <slot name="menu" />
        </div>
      </div>
    </div>
    <client-only>
      <!-- drawer -->
      <el-drawer
        v-model="showDrawer"
        :with-header="false"
        direction="ltr"
        :lock-scroll="false"
        class="w-2/3">
        <slot name="drawer" v-if="showDrawer && $slots['drawer']" :toggle-drawer="toggleDrawer" />
      </el-drawer>
    </client-only>
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
:deep(a).nav {
  @apply rounded-2xl px-3 py-2;
  &::before {
    content: '';
    @apply bg-hd-Yellow text-hd-clickGreen absolute bottom-[2px] left-[15%] -z-10 h-2 w-0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }
}
:deep(a).nav:not(.router-link-active):hover {
  &::before {
    @apply w-[70%];
    transform: scaleX(100%);
  }
}
:deep(a).router-link-active.nav {
  @apply text-hd-clickGreen;
  &::after {
    content: '';
    @apply bg-hd-Yellow absolute bottom-[2px] left-[15%] -z-10 h-2  w-[70%];
  }
}

// togggle
.toggle {
  @apply relative right-[10px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center overflow-hidden rounded-[10px];
  z-index: 3000;
  span {
    @apply bg-hd-Text absolute h-[2px] w-[30px] rounded-[4px];
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
</style>
