<template>
  <section class="home-gsap">
    <span class="left">浩呆 </span>
    <span class="right">HaoDai </span>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
    <div class="home-box"></div>
  </section>
</template>

<script setup lang="ts">
import { gsap, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.home-gsap',
        scrub: 0.5,
        pin: true,
        start: 'top 44px',
        end: '+=150%',
      },
    })
    .to('.home-box', {
      force3D: true,
      duration: 1,
      xPercent: 100,
      ease: 'power1.inOut',
      stagger: { amount: 1 },
    })
    .to('.home-box', { ease: 'power1.out', duration: 1, rotation: '45deg' }, 0)
    .to('.home-box', { ease: 'power1.in', duration: 1, rotation: '0deg' }, 1)
})
</script>

<style scoped lang="scss">
.home-gsap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  // background: var(--hd-black);
  span {
    position: absolute;
    display: block;
    text-align: center;
    font-size: 50px;
    z-index: 2;
    width: 50%;
    text-transform: uppercase;
    font-weight: 900;
    color: transparent;
    top: calc(50vh - 56px);
    background-image: url('assets/img/bg.png');
    -webkit-background-clip: text; /* 背景裁剪成文字的前景色 */
    background-clip: text;

    &.right {
      right: 0;
    }

    &.left {
      left: 0;
    }
  }

  .home-box {
    height: 1.2vh;
    width: 50%;
    margin-bottom: -0.2vh;
    background: var(--hd-black);
    display: block;
  }
}
</style>
