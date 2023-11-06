<template>
  <main v-loading="state.loading" class="flex h-full w-full flex-col items-center justify-center">
    <el-form
      ref="ruleFormRef1"
      :model="state.form"
      label-width="auto"
      label-position="left"
      class="hd-form p-4">
      <HeadTitle title="開啟自動推播" class="mb-4 text-[#164863]"></HeadTitle>
      <span class="mb-4 flex items-center justify-center text-lg text-[#427D9D]">{{
        state.profile.displayName
      }}</span>
      <section class="flex h-full w-full flex-col gap-6">
        <el-form-item label="NIKE 發售預告">
          <el-switch v-model="state.form.nike_broadcast" active-text="開啟" inactive-text="關閉" />
        </el-form-item>
        <el-form-item label="Hypebeast 球鞋資訊">
          <el-switch
            v-model="state.form.hypebeast_broadcast"
            active-text="開啟"
            inactive-text="關閉" />
        </el-form-item>
        <el-form-item label="IThome 新聞">
          <el-switch
            v-model="state.form.ithome_broadcast"
            active-text="開啟"
            inactive-text="關閉" />
        </el-form-item>

        <div class="flex justify-center">
          <el-button type="primary" @click="handleSubmit" class="w-full">確定</el-button>
        </div>
      </section>
    </el-form>
  </main>
</template>

<script setup lang="ts">
import { liff } from '@line/liff'

definePageMeta({
  layout: 'linebot',
})
useSeoMeta({
  title: 'Line Bot',
  description: 'Line Bot',
  keywords: 'Line Bot',
})

const state = reactive({
  loading: false,
  profile: {} as {
    userId: string
    displayName: string
    pictureUrl?: string
    statusMessage?: string
  },
  form: {
    nike_broadcast: false,
    hypebeast_broadcast: false,
    ithome_broadcast: false,
  },
})
onMounted(() => {
  liff
    .init({ liffId: '1657518005-n0BMBGqY' })
    .then(() => {
      if (!liff.isLoggedIn()) {
        liff.login()
      }
      handleFetch()
    })
    .catch((err) => {
      console.log(err.code, err.message)
    })
})

/*
 * @description: 取得資料
 */
const handleFetch = () => {
  liff.getProfile().then((profile) => {
    const { userId, displayName, pictureUrl, statusMessage } = profile
    state.profile = { userId, displayName, pictureUrl, statusMessage }
    api.lineBotSetting.fetch(userId).then((res) => {
      const {
        nike_broadcast = false,
        hypebeast_broadcast = false,
        ithome_broadcast = false,
      } = res.data.data
      state.form = { nike_broadcast, hypebeast_broadcast, ithome_broadcast }
      state.loading = false
    })
  })
}

/*
 * @description: 提交表單
 */
const handleSubmit = () => {
  const params = {
    ...state.profile,
    ...state.form,
  }
  api.lineBotSetting
    .update(params)
    .then((res) => {
      if (res.data.code === 200) {
        mesBox
          .success({
            title: res.data.message,
            subTitle: '是否關閉視窗',
            showCancelButton: true,
          })
          .then(() => {
            liff.closeWindow()
          })
          .catch(() => {
            handleFetch()
          })
      } else {
        liff
          .sendMessages([
            {
              type: 'text',
              text: res.data.message,
            },
          ])
          .then(() => {
            liff.closeWindow()
          })
      }
    })
    .catch((err) => {
      ElMessage.error(err.response.data.message)
    })
}
</script>
