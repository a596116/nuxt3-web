<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="mb-2 text-center text-xs font-bold">
    <slot>{{ text }}</slot>
  </div>
</template>
