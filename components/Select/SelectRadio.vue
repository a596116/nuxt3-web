<template>
  <div class="flex items-center">
    <slot name="title">
      <span class="mr-4" v-if="title">{{ title }}</span>
    </slot>
    <el-radio-group :model-value="modelValue" @change="change" size="default" class="gap-5">
      <el-radio-button :label="item" v-for="(item, index) of lists" :key="index" />
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  lists: string[]
  title?: string
}>()

const emit = defineEmits(['update:modelValue', 'change'])
const change = (val?: any) => {
  emit('update:modelValue', val)
  emit('change')
}
</script>

<style scoped lang="scss">
:deep(.el-radio-button__inner) {
  @apply border-hd-Text/60 rounded-full;
  border-left: 1px solid;
}
:deep(.el-radio-button:first-child .el-radio-button__inner) {
  @apply rounded-full;
  // border-left: 1px solid;
}
:deep(.el-radio-button:last-child .el-radio-button__inner) {
  @apply rounded-full;
}
:deep(.el-radio-button__inner) {
  border-color: rgb(66 65 65 / 0.6);
}
:deep(.el-radio-button:first-child .el-radio-button__inner) {
  border-left: 1px solid;
  border-color: rgb(66 65 65 / 0.6);
}
:deep(.el-radio-button:first-child .el-radio-button__inner) {
  border-left: 1px solid;
  border-color: rgb(66 65 65 / 0.6);
}
:deep(.el-radio-button:first-child.is-active .el-radio-button__inner) {
  border-color: rgb(66 65 65 / 0);
}
</style>
