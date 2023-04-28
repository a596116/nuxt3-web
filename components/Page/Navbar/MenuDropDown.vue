<template>
  <DropDown>
    <template #title>
      <span class="flex cursor-pointer items-center justify-center rounded px-3">
        {{ text }}
      </span>
    </template>
    <template #dropdown>
      <Anchor
        v-for="item in menu"
        :key="item.text"
        :to="item.route ? item.route : undefined"
        :href="item.href ? item.href : undefined"
        class="hover:bg-hd-hoverGreen flex cursor-pointer items-center whitespace-nowrap rounded-lg py-2 px-2 hover:text-white">
        <slot>{{ item.text }}</slot>
      </Anchor>
    </template>

    <template #select> </template>
  </DropDown>
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
})

// state
const menu = toRef(props, 'menu')
</script>

<style lang="scss">
.dropdown:hover > .dropdown-content {
  display: block;
}
</style>
