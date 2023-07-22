<template>
  <div class="group flex items-center">
    <div class="dropdown group flex h-full">
      <Anchor
        v-if="to"
        :to="to"
        :text="text"
        class="center h-full"
        :class="padding"
        :hover="false" />
      <div class="dropdown-menu">
        <div
          class="mx-auto flex min-h-[200px] max-w-[1024px] gap-6 overflow-y-auto py-2 text-white">
          <section
            v-for="item in menu"
            :key="item.name"
            class="flex cursor-pointer flex-col items-start gap-2 whitespace-nowrap rounded-md py-2">
            <Anchor
              :to="item.mpages ? item.mpages : undefined"
              :href="item.descs ? item.descs : undefined"
              :text="item.name"
              class="text-lg hover:text-white/50" />
            <Anchor
              v-for="chi of item.children"
              :to="chi.mpages ? chi.mpages : undefined"
              :href="chi.descs ? chi.descs : undefined"
              :text="chi.name"
              class="text-base text-white hover:text-white/50" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  menu: {
    type: [Object],
    default: undefined,
  },
  to: {
    type: [String, Object],
    default: '',
  },
  padding: {
    type: String,
    default: '6px',
  },
  index: {
    type: Number,
    default: 0,
  },
})

// state
const menu = toRef(props, 'menu')
</script>

<style lang="scss">
.dropdown:hover > .dropdown-content {
  display: block;
}
.dropdown-menu {
  @apply bg-hd-black absolute left-0 top-full min-h-[200px] w-full transition-[.5s,ease-in-out] duration-500;
  visibility: hidden;
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
}
.group:hover > .dropdown-menu {
  visibility: visible;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
</style>
