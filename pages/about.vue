<template>
  <Wrapper
    class="bg-hd-Bg mb-6 flex min-h-[1200px] flex-1 flex-col items-center px-4 md:min-h-full lg:px-8">
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
      content: '浩呆前湍開發',
    },
  ],
}))
</script>

<style scoped></style>
