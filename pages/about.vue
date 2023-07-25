<template>
  <Wrapper
    class="bg-hd-bg flex min-h-[1024px] flex-1 flex-col items-center px-4 md:min-h-full lg:px-8">
    <div
      class="relative top-[20px] z-50 max-md:w-full md:absolute md:left-[calc(50%-420px)] md:top-[120px]">
      <Indroduce />
    </div>
    <Card class="z-40" />
  </Wrapper>
</template>

<script setup lang="ts">
const { t } = useLang()
useHead(() => ({
  title: capitalize(t('pages.about.title')),
  meta: [
    {
      name: 'description',
      content: '關於浩呆',
    },
  ],
}))
</script>

<style scoped></style>
