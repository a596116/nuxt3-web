<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex min-h-screen flex-col">
      <div class="flex w-full flex-1 flex-col">
        <div class="max-w-8xl relative mx-auto flex h-full w-full flex-1 flex-col">
          <slot />
        </div>
      </div>
      <slot name="footer">
        <Footer />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
