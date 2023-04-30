<template>
  <Wrapper class="bg-hd-Bg flex max-h-screen flex-col" :top="false">
    <client-only>
      <MusicContainer />
    </client-only>
  </Wrapper>
</template>

<script setup lang="ts">
useHead(() => ({
  title: 'Music',
  meta: [
    {
      name: 'description',
      content: '浩呆前湍開發',
    },
  ],
}))
</script>
