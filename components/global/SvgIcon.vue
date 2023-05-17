<template>
  <svg
    :class="svgClass"
    v-bind="$attrs"
    :style="{ color: color }"
    :width="(width as any)"
    :height="(height as any)">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '22px',
  },

  height: {
    type: String,
    default: '22px',
  },
  animation: {
    type: Boolean,
    default: false,
  },
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name} ${props.animation ? 'hover:animate-move' : ''}`
  }
  return 'svg-icon'
})
</script>

<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
  display: inline-block;
}
path {
  fill: none;
  stroke: #333333;
  stroke-width: 1;
  stroke-linecap: round;
}
</style>
