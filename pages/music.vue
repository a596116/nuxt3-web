<template>
  <Wrapper class="pt-[120px] max-lg:pt-[60px]" :top="false">
    <client-only>
      <MusicContainer />
    </client-only>
  </Wrapper>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'music',
})
useHead(() => ({
  title: 'Music',
}))
</script>
