import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        // fix bug: Vitest was initialized with native Node instead of Vite Node
        // https://github.com/nuxt/framework/issues/3252#issuecomment-1126771193
        deps: {
            inline: ['@nuxt/test-utils-edge'],
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, '.'),
        },
    },
    plugins: [
        // auto import vue、vueuse
        AutoImport({
            // imports: ['vue', '@vueuse/core'],
            imports: ['vue'],
            vueTemplate: true,
            dts: true, // not matter
        }),
        // auto import vue component
        Components({
            dirs: [
                './components',
                './layoutComponents',
                './pagesComponents',
            ],
        }),
    ],
})