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
    <!-- <Wrapper class="flex-col flex-1 gap-14 bg-ec-bg px-1 items-center">
    </Wrapper> -->
  </div>
</template>
