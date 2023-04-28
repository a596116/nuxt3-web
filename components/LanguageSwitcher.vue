<script lang="ts" setup>
import { availableLocales } from '~/utils/lang'
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown',
  },
})

// state
const currentStyle = toRef(props, 'type')
const localeSetting = useState<string>('locale.setting')
</script>

<template>
  <DropDown :animation="true" :type="currentStyle" icon="language">
    <template #dropdown>
      <section
        v-for="lang in availableLocales"
        @click="localeSetting = lang.iso"
        :key="lang.iso"
        :value="lang.iso"
        class="flex cursor-pointer items-center rounded-lg py-2 px-2 duration-300"
        :class="{
          'bg-hd-hoverGreen text-white ': localeSetting === lang.iso,
          'hover:bg-hd-hoverGreen hover:text-white': localeSetting !== lang.iso,
        }">
        <span class="mr-2 text-sm">
          {{ lang.flag }}
        </span>
        <span class="flex-1 truncate text-center">
          {{ lang.name }}
        </span>
      </section>
    </template>

    <template #select>
      <select
        v-model="localeSetting"
        class="w-full rounded border border-gray-50/[0.2] bg-transparent px-2 py-1 pr-3 text-gray-300 outline-none">
        <option
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.iso"
          class="flex items-center space-x-2">
          {{ lang.flag }} {{ lang.name }}
        </option>
      </select>
    </template>
  </DropDown>
</template>
