<template>
  <div class="relative flex h-screen min-h-screen w-screen flex-col overflow-hidden">
    <ul class="bgList">
      <li
        v-for="n in total"
        :key="n"
        :style="img(n - 1)"
        :class="{ active: bgactive === n - 1 || bgpreactive === n - 1 }">
        <div class="drop-shadow">
          <div class="glass" :style="img(n - 1)"></div>
          <div class="title">
            <span class="text-5xl md:text-7xl">HaoDai </span>
            <span class="mt-4 text-2xl">熱愛前端的小白</span>
            <Anchor text="關於我 →" :to="{ name: 'about' }" class="mt-5 border-b-2" />
          </div>
        </div>
      </li>
    </ul>
    <section class="relative block h-full w-full md:hidden">
      <img
        src="https://s2.loli.net/2023/02/09/KeEFTM9tNlZmY3r.jpg"
        class="h-screen object-cover"
        alt="" />
      <div class="absolute drop-shadow">
        <img src="https://s2.loli.net/2023/02/09/KeEFTM9tNlZmY3r.jpg" class="glass" alt="" />
        <div class="title">
          <span class="text-5xl md:text-7xl">HaoDai </span>
          <span class="mt-4 text-2xl">熱愛前端的小白</span>
        </div>
      </div>
    </section>
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

onNuxtReady(() => {
  setInterval(() => {
    bgpreactive.value = bgactive.value
    bgactive.value = (bgactive.value + 1 + total.value) % total.value
  }, (animationDuration / 2) * 1500)
})
</script>

<style scoped lang="scss">
.bgList {
  @apply absolute z-0 hidden h-full w-full duration-500 md:block;
  @apply top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%];
  list-style: none;

  li {
    @apply absolute h-full w-full opacity-0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      background-position: 0 0;
    }

    &.active {
      animation: bgAnimate linear;
    }
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
.drop-shadow .title {
  @apply absolute z-[5] flex flex-col items-center justify-center text-white;
  span {
    letter-spacing: 0.5em;
    padding-left: 0.375em;
  }
}

@media (max-width: 980px) {
  .glass {
    -webkit-clip-path: inset(0);
    clip-path: inset(0);
    width: 100%;
    height: 40%;
  }

  .drop-shadow {
    top: 5em;
    width: 100%;
  }
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
