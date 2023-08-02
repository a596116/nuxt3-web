<template>
  <!-- <Wrapper> -->
  <swiper
    :speed="600"
    :parallax="true"
    :autoplay="option.autoplay"
    :pagination="option.pagination"
    :navigation="true"
    :effect="'fade'"
    :loop="true"
    :fade-effect="{ crossFade: true }"
    class="banner relative max-h-screen w-full rounded-[0px]">
    <swiper-slide v-for="item of content" :key="item.title">
      <img :src="item.image" alt="浩呆" class="banner-bg parallax-bg block object-cover" />
      <div
        class="banner-inner text-hd-primary absolute flex flex-col"
        :class="{
          '-translate-x-[50%]': item.align === 'center',
          '-translate-x-[50%] lg:translate-x-[120%]': item.align === 'right',
          '-translate-x-[50%] lg:-translate-x-[100%]': item.align === 'left',
        }">
        <span class="mb-3 text-xl font-bold lg:text-4xl" data-swiper-parallax="-800">
          {{ item.title }}
        </span>
      </div>
    </swiper-slide>
  </swiper>
  <!-- </Wrapper> -->
</template>

<script setup lang="ts">
import 'swiper/swiper.css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import SwiperCore, {
  Autoplay,
  Pagination,
  Parallax,
  SwiperOptions,
  Navigation,
  EffectFade,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
SwiperCore.use([Autoplay, Pagination, Parallax, Navigation, EffectFade])

const option: SwiperOptions = {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
}

const content = [
  {
    title: '前端網頁小白',
    image: 'https://i.imgur.com/YRWcNbY.jpg',
    align: 'center',
  },
  {
    title: '',
    image: 'https://i.imgur.com/MPKwD2a.jpg',
    align: 'right',
  },
  {
    title: '',
    image: 'https://i.imgur.com/erxeLO3.jpg',
    align: 'left',
  },
]
</script>

<style scoped lang="scss">
.banner-bg {
  @apply m-auto min-h-[300px] w-full;
  position: relative;
  border-radius: 0px;
}
.banner-inner {
  @apply left-1/2 top-1/2  text-center;
}
:deep(.swiper-pagination-bullet) {
  background-color: var(--hd-white) !important;
  height: 12px;
  width: 12px;
}

:deep(.swiper-button-prev) {
  @apply text-hd-white left-5 h-[20%] w-10 -translate-x-20 -translate-y-1/2 duration-300;
}
:deep(.swiper-button-next) {
  @apply text-hd-white right-5 h-[20%] w-10 -translate-y-1/2 translate-x-20 duration-300;
}
.banner:hover {
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    @apply translate-x-0;
  }
}
</style>
