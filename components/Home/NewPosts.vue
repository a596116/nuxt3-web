<template>
  <main class="flex w-full flex-col">
    <article
      v-for="(post, index) in data?.posts"
      :key="index"
      class="relative my-6 flex w-full items-center justify-center max-lg:flex-col lg:my-16"
      :class="{ 'lg:flex-row-reverse': index % 2 == 0 }">
      <Anchor
        :to="`/posts/${post.slug}`"
        class="post-img bg-hd-black group z-10 h-[300px] w-[600px] overflow-hidden rounded-md shadow-md max-sm:h-[250px] max-sm:w-[90%]">
        <NuxtImg
          format="webp"
          :src="post.img"
          class="h-full w-full object-cover duration-500 group-hover:scale-110" />
      </Anchor>
      <section
        class="post-content border-hd-black-50 center relative flex w-[450px] rounded-md max-sm:w-[90%] lg:-left-5 lg:top-5 lg:h-[300px] lg:border"
        :class="{ 'lg:left-5': index % 2 == 0 }">
        <Anchor :to="`/posts/${post.slug}`">
          <div class="flex flex-col px-8 py-8 max-sm:py-4">
            <span class="text-[0.6rem]">{{ post.Date }}</span>
            <span class="text-[2rem] font-semibold">{{ post.Title }}</span>
            <span class="text-[1rem]">{{ post.desc }}</span>
          </div>
        </Anchor>
      </section>
    </article>
    <section class="mx-auto mb-6">
      <Anchor
        text="所有文章→"
        to="/posts"
        class="border-hd-black-50 hover:border-hd-hover rounded-md border p-4" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap, ScrollTrigger } from 'gsap/all'
const { $notion } = useNuxtApp()

gsap.registerPlugin(ScrollTrigger)

const { data, pending, error } = await useAsyncData('all_posts', async () => {
  const pageTable = await $notion.getPageTable('d324bdb8357444f78cde3ddae3b6bdcb')
  const posts = pageTable.sort((a: any, b: any) => a.Date - b.Date).slice(0, 6)
  return {
    posts,
  }
})

onMounted(() => {
  const postsContent = document.querySelectorAll('.post-content')
  const postsImg = document.querySelectorAll('.post-img')
  const start = document.documentElement.clientWidth < 768 ? 'top 130%' : 'top 90%'
  postsContent.forEach((post: any, index: number) => {
    if (index % 2 == 0) {
      gsap.from(post, {
        scrollTrigger: {
          trigger: post,
          start: start,
          end: 'bottom 90%',
          scrub: true,
        },
        ease: 'ease',
        opacity: 0,
        x: -150,
      })
    } else {
      gsap.from(post, {
        scrollTrigger: {
          trigger: post,
          start: start,
          end: 'bottom 90%',
          scrub: true,
        },
        ease: 'ease',
        opacity: 0,
        x: 150,
      })
    }
  })
  postsImg.forEach((post: any, index: number) => {
    if (index % 2 == 0) {
      gsap.from(post, {
        scrollTrigger: {
          trigger: post,
          start: start,
          end: 'bottom 90%',
          scrub: true,
        },
        ease: 'ease',
        opacity: 0,
        x: 150,
      })
    } else {
      gsap.from(post, {
        scrollTrigger: {
          trigger: post,
          start: start,
          end: 'bottom 90%',
          scrub: true,
        },
        ease: 'ease',
        opacity: 0,
        x: -150,
      })
    }
  })
})
</script>
