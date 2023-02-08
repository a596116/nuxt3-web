<template>
  <div :class="{ scroll }" class="relative flex h-screen w-full items-center justify-center">
    <ul class="bgList">
      <li
        v-for="n in total"
        :key="n"
        :style="img(n - 1)"
        :class="{ active: bgactive === n - 1 || bgpreactive === n - 1 }">
        <div class="drop-shadow">
          <div class="glass" :style="img(n - 1)"></div>
          <span>HaoDai</span>
        </div>
        <div
          :class="{ 'mouse-show': scroll }"
          class="absolute bottom-[80px] flex flex-col items-center justify-center">
          <div class="mouse"></div>
          <p class="mouse-text">Scroll</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const scroll = useState<boolean>('home.scroll', () => false)
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

onNuxtReady(() => {
  window.addEventListener('scroll', function () {
    scroll.value = window.scrollY > 0
  })
})

setInterval(() => {
  bgpreactive.value = bgactive.value
  bgactive.value = (bgactive.value + 1 + total.value) % total.value
}, (animationDuration / 2) * 1500)
</script>

<style scoped lang="scss">
@import '~/assets/sass/mouse.scss';
.bgList {
  @apply absolute top-[50%] left-[50%] z-10 h-full w-full -translate-x-[50%] -translate-y-[50%] bg-transparent duration-500;
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

:deep(.homeTitle) {
  @apply absolute bottom-40 flex flex-row justify-center;
  span {
    @apply text-6xl text-gray-400 duration-500;
    letter-spacing: 5px;
  }
  .typed-cursor {
    font-size: 3.75rem !important;
  }
}

.drop-shadow {
  height: 90%;
  width: 80%;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.3));
  display: flex;
  justify-content: center;
  align-items: center;
}
.glass {
  height: 90%;
  width: 80%;
  background-size: cover;
  background-position: center;
  -webkit-clip-path: inset(10em);
  clip-path: inset(10em);
  filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.7s ease-in-out;
}
.drop-shadow > span {
  position: absolute;
  z-index: 5;
  color: white;
  font-size: 4em;
  letter-spacing: 0.5em;
  padding-left: 0.375em;
}

.scroll .glass {
  height: 0;
  width: 0;
}
@media (max-width: 980px) {
  .glass {
    -webkit-clip-path: inset(5em);
    clip-path: inset(5em);
  }

  .drop-shadow:before {
    top: 5em;
    width: calc(100% - 10em);
  }
  .drop-shadow > span {
    font-size: 4em;
  }
}
</style>
