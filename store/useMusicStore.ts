import { defineStore } from 'pinia'
import Songs from '~/assets/songs/songs.json'

interface MusicInfo {
    id: number,
    name: string,
    cover: string,
    url: string,
    artistsName: string,
}
export const useMusicStore = defineStore('Music', {
    state: () => ({
        // 歌曲列表
        musicLists: Songs,
        // 歌曲歷史紀錄
        musicHistory: [],

        musicInfo: <MusicInfo>{},

        // 播放模式
        playMode: 'loop',
    }),
    getters: {

    },
    actions: {

    },
    persist: {
        paths: ['musicInfo', 'playMode'],
        storage: persistedState.localStorage
    }
})