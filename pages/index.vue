<script lang="ts" setup>
// composable
const { t } = useLang()

useHead(() => ({
  title: capitalize(t('pages.index.title')),
  meta: [
    {
      name: 'description',
      content: '浩呆前湍開發',
    },
  ],
}))
</script>

<template>
  <div class="">
    <!-- Banner -->
    <BannerSwiper />
    <Wrapper class="bg-ec-bg flex-1 flex-col items-center gap-14 px-1" :top="false">
      <NewPosts />
    </Wrapper>
  </div>
</template>
