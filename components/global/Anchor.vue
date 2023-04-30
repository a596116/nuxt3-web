<script lang="ts" setup>
// micro compiler
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: '',
  },
})

// state
const href = toRef(props, 'href')
const to = toRef(props, 'to')
</script>
<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="hover:text-hd-hoverText cursor-pointer outline-none transition-colors duration-300">
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else-if="href"
    class="hover:text-hd-hoverText cursor-pointer outline-none transition-colors duration-300"
    :href="href"
    target="_blank">
    <slot>{{ text }}</slot>
  </a>
</template>
