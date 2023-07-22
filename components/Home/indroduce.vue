<template>
  <div
    class="introduce relative z-[1] m-auto flex h-[450px] w-[90%] flex-col overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-[10px-0px-50px-rgba(0,0,0,0.5)] transition-[0.3s] md:h-[500px] md:w-[360px] md:overflow-y-hidden"
    data-state="#about">
    <div class="introduce-header">
      <div
        class="introduce-cover"
        style="
          background-image: url('https://media.altphotos.com/cache/images/2018/09/18/06/752/paper-table-sentences-.jpg');
        "></div>
      <img class="introduce-avatar" src="https://s2.loli.net/2023/02/09/HcOiTjFn1KMCovu.jpg" />

      <h1 class="introduce-fullname">
        王教勛
        <p>WNAG CHIAO HSUN</p>
      </h1>
    </div>
    <div class="introduce-main">
      <div class="introduce-section is-active" id="about">
        <div class="introduce-content">
          <div class="introduce-subtitle">{{ t('pages.index.about.title') }}</div>
          <p class="introduce-desc">
            {{ t('pages.index.about.description') }}
          </p>
        </div>
        <div class="introduce-social">
          <Anchor href="https://line.me/ti/p/YXi16BOO8V">
            <svg-icon name="line"></svg-icon>
          </Anchor>
          <Anchor href="https://github.com/a596116">
            <svg-icon name="github"></svg-icon>
          </Anchor>
        </div>
      </div>
      <div class="introduce-section" id="experience">
        <div class="introduce-content">
          <div class="introduce-subtitle">{{ t('pages.index.experience.title') }}</div>
          <div class="introduce-timeline">
            <div class="introduce-item" data-year="2023">
              <div class="introduce-item-title">{{ t('pages.index.experience.2023.title') }}</div>
              <div class="introduce-item-desc">
                {{ t('pages.index.experience.2023.description') }}
              </div>
            </div>
            <div class="introduce-item" data-year="2018">
              <div class="introduce-item-title">{{ t('pages.index.experience.2018.title') }}</div>
              <div class="introduce-item-desc">
                {{ t('pages.index.experience.2018.description') }}
              </div>
            </div>
            <div class="introduce-item" data-year="2014">
              <div class="introduce-item-title">{{ t('pages.index.experience.2014.title') }}</div>
              <div class="introduce-item-desc">
                {{ t('pages.index.experience.2014.description') }}
              </div>
            </div>
            <div class="introduce-item" data-year="2011">
              <div class="introduce-item-title">{{ t('pages.index.experience.2011.title') }}</div>
              <div class="introduce-item-desc">
                {{ t('pages.index.experience.2011.description') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="introduce-section" id="contact">
        <div class="introduce-content">
          <div class="introduce-subtitle">{{ t('pages.index.contact') }}</div>
          <div class="introduce-contact-wrapper">
            <div class="introduce-contact">
              <svg-icon
                name="phone"
                class="mr-3 h-8 w-8 border-r border-r-[#dfe2ec] pr-3"></svg-icon>
              <Anchor href="tel:0988640301" text="0988640301" />
            </div>
            <div class="introduce-contact"></div>
            <div class="introduce-contact">
              <svg-icon
                name="mail"
                class="mr-3 h-8 w-8 border-r border-r-[#dfe2ec] pr-3"></svg-icon>
              <Anchor href="mailto:a596116@gmail.com" text="a596116@gmail.com" />
            </div>
          </div>
        </div>
      </div>
      <div class="introduce-buttons">
        <button data-section="#about" class="is-active" @click="handleButtonClick">
          {{ t('pages.index.about.title') }}
        </button>
        <button data-section="#experience" @click="handleButtonClick">
          {{ t('pages.index.experience.title') }}
        </button>
        <button data-section="#contact" @click="handleButtonClick">
          {{ t('pages.index.contact') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useLang()
const handleButtonClick = (e: any) => {
  let buttons = document.querySelectorAll<HTMLElement>('.introduce-buttons button')
  let sections = document.querySelectorAll<HTMLElement>('.introduce-section')
  let introduce = document.querySelector<HTMLElement>('.introduce')
  let targetSection = e.target.getAttribute('data-section')
  let section = document.querySelector<HTMLElement>(targetSection)
  targetSection !== '#about'
    ? introduce?.classList.add('is-active')
    : introduce?.classList.remove('is-active')
  introduce?.setAttribute('data-state', targetSection)
  sections.forEach((s) => s.classList.remove('is-active'))
  buttons.forEach((b) => b.classList.remove('is-active'))
  e.target.classList.add('is-active')
  section?.classList.add('is-active')
}
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  display: none;
}

.introduce.is-active {
  .introduce-header {
    @apply h-20;
  }

  .introduce-cover {
    @apply -top-[50px] h-24;
  }

  .introduce-avatar {
    @apply bottom-[10px] left-5 h-[50px] w-[50px] transform-none;
  }

  .introduce-fullname,
  .introduce-jobtitle {
    @apply left-[86px] transform-none;
  }

  .introduce-fullname {
    @apply bottom-[10px] text-lg;
  }

  .introduce-jobtitle {
    @apply bottom-4 text-xs leading-[1px];
  }
}

.introduce-header {
  @apply relative flex h-[200px] w-full shrink-0 transition-[0.3s];
  * {
    transition: 0.3s;
  }
}

.introduce-cover {
  @apply absolute  left-0 top-[-20%] h-40 w-full scale-[1.2] bg-cover bg-center blur-[1px] transition-[0.5s] will-change-[top];
}

.introduce-avatar {
  @apply absolute -bottom-2.5 left-2/4 h-[100px] w-[100px] -translate-x-2/4 -translate-y-16 rounded-[50%] object-cover object-center shadow-[0_8px_8px_rgba(0,0,0,0.2)];
}

.introduce-fullname {
  @apply text-hd-black absolute bottom-[-30px] left-2/4 -translate-x-2/4 -translate-y-2.5 whitespace-nowrap text-center text-[22px] font-bold;
}

.introduce-jobtitle {
  @apply absolute bottom-0 left-2/4 m-0 -translate-x-2/4 translate-y-[-7px] whitespace-nowrap text-[11px] font-medium uppercase tracking-[1.5px] opacity-70;
}

.introduce-main {
  @apply relative flex flex-[1] flex-col pt-2.5;
}

.introduce-subtitle {
  @apply mb-2 text-[13px] font-bold text-[#2b2c48];
}

.introduce-content {
  @apply p-5;
}

.introduce-desc {
  @apply m-0 text-sm font-normal leading-[1.6] text-[#636b6f];
}

.introduce-social {
  @apply mb-[30px] flex items-center justify-center px-5 py-0;
  img {
    @apply block w-4 brightness-[96%] contrast-[87%] hue-rotate-[160deg] invert-[61%] saturate-[468%] sepia-[10%] transition-[0.3s];
  }
  a {
    @apply mr-2.5 inline-flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#5d85c10d] transition-[0.3s] last:mr-0;

    &:hover img {
      @apply brightness-[80%] contrast-[86%] hue-rotate-[185deg] invert-[64%] saturate-[5978%] sepia-[5%];
    }
  }
}

.introduce-buttons {
  @apply sticky bottom-0 left-0 mt-auto flex bg-white;

  button {
    @apply text-hd-black flex-auto cursor-pointer select-none border-0 border-b-[3px] border-solid border-b-transparent px-[5px] py-[15px] text-[13px] font-medium transition-[0.3s];
    background: 0;
    outline: 0;

    &.is-active,
    &:hover {
      @apply border-b-hd-secondary text-hd-black border-b-[3px] border-solid;
      background: linear-gradient(
        to bottom,
        rgba(127, 199, 231, 0) 0%,
        rgba(207, 204, 255, 0.1) 44%,
        hsla(39, 97%, 71%, 0.2) 100%
      );
    }
  }
}

.introduce-section {
  @apply hidden;
  &.is-active {
    @apply block animate-[fadeIn_0.6s_both];
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(40px);
  }
  100% {
    opacity: 1;
  }
}

.introduce-timeline {
  @apply relative mt-[30px] after:absolute after:left-[42px] after:top-0 after:h-full after:w-0.5 after:content-[''];
  &:after {
    background: linear-gradient(to top, rgba(134, 214, 243, 0) 0%, #fdcb6e 100%);
  }
}

.introduce-item {
  @apply relative z-[1] pb-[30px] pl-[60px] pr-5 after:absolute after:left-[37px] after:top-0 after:h-2 after:w-2.5 after:rounded-[50%] after:border-2 after:border-solid after:border-white after:indent-[-35px] after:text-[11px] after:leading-[0.6] after:text-[rgba(#868686,0.7)] after:content-[attr(data-year)] last:pb-[5px];
  &:after {
    background: linear-gradient(to bottom, lighten(#fdcb6e, 20%) 0%, #fdcb6e 100%);
  }
}

.introduce-item-title {
  @apply mb-[5px] text-sm font-medium text-[#2b2c48];
}
.introduce-item-desc {
  @apply text-[13px] leading-normal text-[#6f6f7b];
}
.introduce-contact-wrapper {
  @apply mt-10;
}

.introduce-contact {
  @apply flex cursor-pointer items-center rounded-md px-1 py-0.5 text-base leading-[1.6] text-[#6f6f7b];

  & + & {
    @apply mt-4;
  }
}
</style>
