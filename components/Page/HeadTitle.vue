<template>
  <div class="center relative w-full text-xl font-bold">
    <div class="absolute right-0">
      <slot name="left"></slot>
    </div>
    <div class="relative flex justify-between" v-if="style == 1">
      <div class="title">{{ title }}</div>
    </div>
    <el-divider v-if="style == 2">
      <div class="text-xl font-bold">{{ title }}</div>
    </el-divider>
    <div class="flex items-center" v-if="style == 3">
      <svg-icon name="triangle" class="text-hd-Green h-6 w-6 rotate-90" />
      <div class="mx-3 text-xl font-bold">{{ title }}</div>
      <svg-icon name="triangle" class="text-hd-Green h-6 w-6 -rotate-90" />
    </div>
    <div class="relative flex w-full justify-start px-6 py-2" v-if="style == 4">
      <div class="border-hd-Text border-l-4 pl-3">{{ title }}</div>
    </div>
    <div class="absolute right-0">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    style?: number
    bgColor?: string
  }>(),
  {
    style: 1,
  },
)
const bgCol = computed(() => {
  return props.bgColor || '#fff'
})
</script>

<style scoped lang="scss">
.title::after {
  content: '';
  @apply bg-hd-Green absolute -bottom-1 left-1/2 flex h-1 w-3/5 -translate-x-1/2;
}
:deep(.el-divider__text) {
  padding: 0 40px;
  background-color: v-bind(bgCol);
}
:deep(.el-divider--horizontal) {
  @apply border-hd-Green/70;
}
</style>
