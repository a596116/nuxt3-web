<template>
  <div
    class="relative flex h-[1100px] min-h-screen w-full flex-col items-center justify-center md:h-full">
    <ul class="bgList">
      <li
        v-for="n in total"
        :key="n"
        :style="img(n - 1)"
        :class="{ active: bgactive === n - 1 || bgpreactive === n - 1 }"></li>
    </ul>
    <div class="relative top-[120px] z-50 md:absolute md:left-[calc(50%-420px)]">
      <HomeIndroduce />
    </div>
    <!-- <div class="absolute"> -->
    <HomeCard class="z-40" />
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
const total = useState<number>('home.total', () => 5)
const animationDuration = 10
const bgactive = useState<number>('home.bgactive', () => 0)
const bgpreactive = useState<number>('home.bgpreactive', () => 0)
const bgimg = [
  'https://media.altphotos.com/cache/images/2018/01/11/09/1504/sunset-cliff.jpg',
  'https://media.altphotos.com/cache/images/2020/12/09/15/1504/landscape-mountain.jpg',
  'https://media.altphotos.com/cache/images/2020/10/13/08/1504/sky-pylons-lines.jpg',
  'https://media.altphotos.com/cache/images/2020/11/10/09/1504/church-moon.jpg',
  'https://media.altphotos.com/cache/images/2018/01/12/04/1504/manhattan-seagull-skyline.jpg',
]

const img = (n: number) => {
  return {
    backgroundImage: `url(${bgimg[n]})`,
    animationDuration: `${animationDuration}s`,
  }
}

setInterval(() => {
  bgpreactive.value = bgactive.value
  bgactive.value = (bgactive.value + 1 + total.value) % total.value
}, (animationDuration / 2) * 1500)
</script>

<style scoped lang="scss">
.bgList {
  @apply absolute top-[50%] left-[50%] z-0 hidden h-full w-full -translate-x-[50%] -translate-y-[50%] duration-500  md:block;
  list-style: none;

  li {
    @apply absolute h-full w-full opacity-0;
    background: center no-repeat;
    background-size: 150% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      animation: bgAnimate linear;
    }
  }
}

.scroll .bgList {
  width: 70%;
  height: 300px;
}

@keyframes bgAnimate {
  0% {
    opacity: 0;
    background-size: 150% auto;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    background-size: 110% auto;
  }
}
</style>
