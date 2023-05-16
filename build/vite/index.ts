import type { NuxtConfig } from '@nuxt/schema'
import { useEnv } from '../env'
import { createVitePlugins } from './plugins'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export const createViteConfig = (): NuxtConfig['vite'] => {
  const { viteEnv } = useEnv()
  return {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
      }),
      createVitePlugins(viteEnv),
      // visualizer(),
    ],

  }
}
