import type { NuxtConfig } from '@nuxt/schema'
import { useEnv } from '../env'
import { createVitePlugins } from './plugins'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { visualizer } from 'rollup-plugin-visualizer'
import IconsResolver from 'unplugin-icons/resolver'
import path from 'path'

export const createViteConfig = (): NuxtConfig['vite'] => {
  const { viteEnv } = useEnv()
  return {
    plugins: [
      AutoImport({
        dts: 'types/auto-import.d.ts',
      }),
      Components({
        dts: 'types/components.d.ts',
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
      }),
      createVitePlugins(viteEnv),
      visualizer(),
    ],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/sass/_variables.scss" as *;`,
        },
      },
    },
  }
}
