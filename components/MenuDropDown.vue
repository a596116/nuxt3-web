<template>
  <div class="dropdown relative inline-block cursor-pointer">
    <!-- <button class="inline-flex items-center rounded py-2" @click="open = !open"> -->
    <span class="flex items-center justify-center rounded py-2">
      {{ text }}
    </span>
    <!-- </button> -->
    <div class="dropdown-content absolute hidden origin-top-right pt-2 duration-300 md:-left-[50%]">
      <div class="rounded-md bg-white px-2 py-2 shadow-lg dark:bg-gray-700">
        <section
          v-for="item in menu"
          :key="item.text"
          class="flex cursor-pointer items-center whitespace-nowrap rounded-md py-2 px-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-400/30">
          <NuxtLink
            v-if="item.route"
            tag="a"
            :to="item.route"
            class="w-full transition-colors duration-300 hover:text-gray-900 hover:no-underline dark:hover:text-white">
            <slot>{{ item.text }}</slot>
          </NuxtLink>
          <a
            v-else-if="item.href"
            class="w-full transition-colors duration-300 hover:text-gray-900 hover:no-underline dark:hover:text-white"
            :href="item.href"
            target="_blank">
            <slot>{{ item.text }}</slot>
          </a>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  menu: {
    type: [Object],
    default: undefined,
  },
})

// state
const menu = toRef(props, 'menu')
const open = useState<boolean>('open', () => false)
</script>

<style lang="scss">
.dropdown:hover > .dropdown-content {
  display: block;
}
</style>
