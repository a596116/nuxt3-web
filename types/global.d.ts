import type { ComponentRenderProxy, Plugin, PropType as VuePropType, VNode, VNodeChild } from 'vue'

declare global {
  declare interface ViteEnv {
    VITE_APP_ENV: string
    VITE_APP_BASE_URL: string
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli'
    VITE_APP_TITLE: string
    VITE_APP_PORT: number
    VITE_APP_DOMAIN: string
    VITE_LIFF_ID: string
  }

  type EmitType = (event: string, ...args: any[]) => void
  type LabelValueOptions = {
    label: string
    value: any
    [key: string]: string | number | boolean
  }[]
  type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null
  type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

  interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
    $el: T
  }

  declare type Recordable<T = any> = Record<string, T>
}
