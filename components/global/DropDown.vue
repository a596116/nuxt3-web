<template>
  <div class="group flex items-center">
    <div v-if="currentStyle === 'dropdown'" class="dropdown group relative inline-block">
      <slot name="title">
        <button class="inline-flex items-center rounded py-2">
          <el-badge v-if="badge" :value="Number(badge)" :max="99" class="item">
            <span
              class="group-hover:text-hd-hoverText flex items-center justify-center duration-300">
              <svg-icon :name="icon" class="group-hover:animate-move" />
            </span>
          </el-badge>
          <Anchor v-else-if="to" :to="to">
            <svg-icon :name="icon" class="group-hover:animate-move" />
          </Anchor>
          <span
            v-else
            class="group-hover:text-hd-hoverText flex items-center justify-center duration-300">
            <svg-icon :name="icon" class="group-hover:animate-move" />
          </span>
        </button>
      </slot>
      <div
        class="absolute origin-top-right scale-y-0 pt-2 duration-300 group-hover:scale-y-100 md:-right-8">
        <div class="flex w-full flex-col gap-4 rounded-md bg-white px-2 py-2 shadow-lg">
          <slot name="dropdown"></slot>
        </div>
      </div>
    </div>
    <slot name="select" v-if="currentStyle === 'select'"></slot>
  </div>
</template>

<script setup lang="ts">
// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown',
  },
  animation: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: 'home',
  },
  badge: {
    type: Number,
  },
  to: {
    type: String,
  },
})

// state
const currentStyle = toRef(props, 'type')
</script>
