<template>
  <div class="relative flex-1" :class="{ 'pt-[100px]': props.top }">
    <slot />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  top: {
    type: Boolean,
    default: true,
  },
})
</script>
