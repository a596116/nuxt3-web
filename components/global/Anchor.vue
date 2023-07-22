<script lang="ts" setup>
// micro compiler

const props = withDefaults(
  defineProps<{
    text?: string
    to?: string | object
    href?: string
    duration?: boolean
    hover?: boolean
  }>(),
  {
    text: '',
    to: undefined,
    href: '',
    duration: true,
    hover: true,
  },
)

// state
const href = toRef(props, 'href')
const to = toRef(props, 'to')
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="cursor-pointer outline-none transition-colors"
    :class="{ 'duration-300': duration, 'hover:text-hd-primary': hover }">
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else-if="href"
    class="cursor-pointer outline-none transition-colors"
    :class="{ 'duration-300': duration, 'hover:text-hd-primary': hover }"
    :href="(href as string)"
    target="_blank">
    <slot>{{ text }}</slot>
  </a>
</template>
