<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex min-h-screen w-full flex-col">
      <slot />
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
