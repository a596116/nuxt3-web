<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex min-h-screen w-full flex-col">
      <div class="flex w-full flex-1 flex-col">
        <div class="max-w-8xl relative mx-auto flex h-full w-full flex-1 flex-col">
          <slot />
        </div>
      </div>
      <slot name="footer">
        <Footer />
      </slot>
    </div>
    <el-backtop
      class="hover:bg-hd-hover hover:text-hd-white text-hd-primary bottom-[200px] right-10 z-[50] duration-300 sm:bottom-[140px] sm:right-[80px]" />
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
