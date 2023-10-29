<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex min-h-screen w-full justify-center">
      <div class="flex w-full max-w-3xl">
        <slot />
      </div>
    </div>
    <el-backtop
      class="hover:bg-hd-hover hover:text-hd-white text-hd-primary bottom-[140px] right-10 z-[50] duration-300 sm:right-[80px]" />
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
