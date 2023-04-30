<template>
  <MusicList
    :songList="musicStore.musicLists"
    :playStatus="state.playing"
    :model-value="musicStore.musicInfo"
    @PlayThisMusic="PlayThisMusic" />
  <!-- 播放器 -->
  <div
    class="mx-16 mb-14 box-border flex h-[130px] w-[calc(100%-128px)] items-center justify-between rounded-2xl bg-white shadow-lg md:px-[28px]"
    @click="state.openMenu = !state.openMenu">
    <audio :src="musicStore.musicInfo.url" ref="audio"></audio>
    <el-image
      class="hidden h-24 w-24 rounded-2xl md:block"
      :src="musicStore.musicInfo.cover"></el-image>

    <section class="flex flex-1 flex-col pl-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-6">
          <span>{{ musicStore.musicInfo.name }}</span>
          <!-- /聲音 -->
          <div class="text-hd-Green mr-3 cursor-pointer text-lg duration-150 hover:scale-110">
            <svg-icon
              name="cycle"
              v-if="musicStore.playMode === 'loop'"
              @click.stop="musicStore.playMode = 'random'"></svg-icon>
            <svg-icon
              name="shuffle"
              v-else-if="musicStore.playMode === 'random'"
              @click.stop="musicStore.playMode = 'loop'"></svg-icon>
          </div>
        </div>

        <!-- 控制按鈕 -->
        <div class="box-border flex h-full w-[240px] items-center justify-between px-5">
          <svg-icon
            name="arrow_left"
            class="h-10 w-10 cursor-pointer duration-150 hover:scale-110"
            @click.stop="prevSong"></svg-icon>
          <svg-icon
            v-show="!state.playing"
            name="play"
            class="h-10 w-10 cursor-pointer duration-150 hover:scale-110"
            @click.stop="playMusic"></svg-icon>
          <svg-icon
            v-show="state.playing"
            name="stop"
            class="h-10 w-10 cursor-pointer duration-150 hover:scale-110"
            @click.stop="playMusic"></svg-icon>
          <svg-icon
            name="arrow_right"
            class="h-10 w-10 cursor-pointer duration-150 hover:scale-110"
            @click.stop="nextSong"></svg-icon>
        </div>

        <!-- /聲音 -->
        <div class="box-border flex w-auto items-center justify-between gap-4 px-5 text-white">
          <svg-icon name="volume_down"></svg-icon>
          <div class="w-[100px]" @click.stop="">
            <el-slider v-model="state.volume"></el-slider>
          </div>
          <svg-icon name="volume_up"></svg-icon>
        </div>
      </div>

      <!-- 進度條 -->
      <div class="relative mt-2 flex h-full w-full items-center gap-4 px-4">
        <div id="audio-bar" class="flex-1">
          <el-slider
            v-model="state.thumbTranslateX"
            @click.stop=""
            :max="state.audioDuration"
            :format-tooltip="formatTime"
            @input="setProgress"></el-slider>
        </div>
        <span class="w-[80px] text-center">{{ state.currentTime }}/{{ state.audioTime }}</span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { useMusicStore } from '~/store/useMusicStore'

const musicStore = useMusicStore()

const state = reactive({
  playing: false,
  playIndex: 0, // 当前播放哪一首
  thumbTranslateX: 0, // 播放進度條
  currentTime: '0', // 當前播放時間
  audioTime: '00:00',
  audioDuration: 0,
  volume: 100,
  openMenu: false,
})
const audio: Ref<HTMLAudioElement | null> = ref(null)

const Init = () => {
  // 判斷是否有上一次播放的歌曲
  if (isEmpty(musicStore.musicInfo)) {
    musicStore.musicInfo = musicStore.musicLists[0]
  }
  audioInit()
}

const audioInit = () => {
  audio.value?.addEventListener('canplay', () => {
    state.audioTime = TimeToString(audio.value?.duration!)!
    state.audioDuration = audio.value?.duration!
  })
  audio.value?.addEventListener('timeupdate', () => {
    // 當前播放時間
    state.currentTime = TimeToString(audio.value?.currentTime!)!
    state.thumbTranslateX = audio.value?.currentTime!
  })
  audio.value?.addEventListener('ended', () => {
    songMode('next')
    musicStore.musicInfo = musicStore.musicLists[state.playIndex]
    setTimeout(() => {
      audio.value?.play()
    }, 100)
  })
}
onMounted(async () => {
  Init()
})
/*
 * @description: 模式
 */
const songMode = (mode: string) => {
  switch (musicStore.playMode) {
    case 'loop': // 列表循環
      if (mode === 'next') {
        state.playIndex =
          state.playIndex + 1 >= musicStore.musicLists.length ? 0 : state.playIndex + 1
      } else {
        state.playIndex =
          state.playIndex - 1 < 0 ? musicStore.musicLists.length - 1 : state.playIndex - 1
      }
      break
    case 'random': // 隨機播放
      state.playIndex = Math.floor(Math.random() * musicStore.musicLists.length)
      break
  }
}

const PlayThisMusic = (data: any) => {
  musicStore.musicInfo = data
  audioInit()
  setTimeout(() => {
    state.playing = true
    audio.value?.play()
  }, 100)
}

/*
 * @description: 時間轉換
 */
const TimeToString = (seconds: number) => {
  let min_d = isNaN(seconds) === true ? 0 : Math.floor(seconds / 60)
  let sec_d
  min_d = min_d < 10 ? 0 + min_d : min_d
  function get_sec_d(x: number) {
    if (Math.floor(x) >= 60) {
      for (var i = 1; i <= 60; i++) {
        if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
          sec_d = Math.floor(x) - 60 * i
          sec_d = sec_d < 10 ? '0' + sec_d : sec_d
        }
      }
    } else {
      sec_d = isNaN(seconds) === true ? 0 : Math.floor(x)
      sec_d = sec_d < 10 ? 0 + sec_d : sec_d
    }
  }
  get_sec_d(seconds)
  return `${min_d}:${sec_d}`
}

const playMusic = () => {
  if (state.playing) {
    state.playing = false
    audio.value?.pause()
  } else {
    state.playing = true
    audio.value?.play()
  }
}

/**
 * 下一首
 */
const nextSong = () => {
  songMode('next')
  musicStore.musicInfo = musicStore.musicLists[state.playIndex]
  state.thumbTranslateX = 0
  state.playing = true
  setTimeout(() => {
    audio.value?.play()
  }, 100)
}

/**
 * 上一首
 */
const prevSong = () => {
  songMode('prev')
  musicStore.musicInfo = musicStore.musicLists[state.playIndex]
  state.thumbTranslateX = 0
  state.playing = true
  setTimeout(() => {
    audio.value?.play()
  }, 100)
}

const setProgress = (e: any) => {
  audio.value!.currentTime = (e / state.audioDuration) * state.audioDuration
}

const formatTime = (val: number) => {
  return TimeToString(val)
}

/**
 * 調整音量
 */
watch(
  () => state.volume,
  () => {
    audio.value!.volume = state.volume / 100
  },
)
</script>

<style scoped lang="scss">
:deep(.el-dropdown-link) {
  color: #fff;
}
</style>
