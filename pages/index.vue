<script lang="ts" setup>
// composable
const { t } = useLang()

useSeoMeta({
  title: capitalize(t('pages.index.title')),
})
</script>

<template>
  <div class="">
    <!-- Banner -->
    <BannerSwiper />
    <!-- <gsap /> -->
    <Wrapper class="bg-ec-bg flex-1 flex-col items-center gap-14 px-1" :top="false">
      <NewPosts />
    </Wrapper>
  </div>
</template>
