<template>
  <div class="relative left-1/2 flex h-full w-[90%] flex-1 -translate-x-1/2 items-center">
    <div
      class="disc-continer relative flex h-[30%] w-full flex-col items-center justify-center md:h-full md:w-[40%]">
      <div class="poster relative h-full min-w-[380px] rounded-2xl md:h-[280px]" ref="rotate">
        <el-image :src="props.modelValue.cover" class="h-full w-full duration-200"></el-image>
      </div>
      <span
        class="mt-1 h-10 w-full text-center text-xl font-semibold leading-10 md:mt-6 md:text-3xl">
        {{ props.modelValue.name }}
      </span>
      <span
        class="mt-1 h-10 w-full text-center text-xl font-semibold leading-10 md:mt-6 md:text-3xl">
        {{ props.modelValue.artistsName }}
      </span>
    </div>

    <div class="max-h-[540px] w-full flex-1 overflow-auto rounded-2xl p-5 shadow-lg md:w-[60%]">
      <div
        class="hover:bg-hd-hoverGreen my-2 mb-1 flex w-full cursor-pointer items-center justify-around rounded-xl px-4 py-2 duration-150 hover:shadow-sm"
        :class="{ 'bg-hd-hoverGreen shadow-lg': props.modelValue.id == index }"
        v-for="(item, index) in props.songList"
        :key="item.id"
        @click="PlayThisMusic(index)">
        <span class="center h-8 w-8" v-if="props.modelValue.id == index && props.playStatus">
          <svg-icon name="volume_up"></svg-icon>
        </span>
        <span class="center w-8" v-else>{{ index + 1 }}</span>
        <el-image class="ml-4 h-14 w-14 rounded" fit="cover" :src="item.cover"></el-image>
        <span class="ml-4 flex-1">{{ item.name }}</span>
        <div class="w-1/5">{{ item.artistsName }}</div>
        <div class="center mr-4 h-8 w-8">
          <img
            class="h-5 w-5"
            v-show="props.modelValue.id == index && props.playStatus"
            src="~/assets/img/music/wave.gif"
            alt="123" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  modelValue: any
  playStatus: boolean
  songList: any
}>()
const emit = defineEmits<{
  (e: 'PlayThisMusic', d: any): void
}>()

const PlayThisMusic = (index: number) => {
  emit('PlayThisMusic', props.songList[index])
}
</script>

<style lang="scss" scoped>
.poster {
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.6);
  animation: animations1 12s linear infinite forwards;
  animation-play-state: paused;
  overflow: hidden;
  // margin-bottom: 120px;
}

@keyframes animations1 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.list-box {
  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }
  &:hover::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
  }

  &:hover::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(133, 129, 129);
  }
}
</style>
