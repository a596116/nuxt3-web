<script lang="ts" setup>
useSeoMeta({
  title: '首頁',
})
</script>

<template>
  <div class="">
    <!-- Banner -->
    <BannerSwiper />
    <!-- <gsap /> -->
    <Wrapper class="bg-hd-bg flex-1 flex-col items-center gap-14 px-1" :top="false">
      <NewPosts />
    </Wrapper>
  </div>
</template>
