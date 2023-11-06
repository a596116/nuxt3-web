import { hash } from 'ohash'

// 后端返回的数据类型
export interface ResOptions<T> {
  code: number
  message: string
  modifydate: string
  data: T
  current_page?: number
  last_page?: number
  total?: number
  per_page?: number
}

type UrlType = string | Request | Ref<string | Request> | (() => string | Request)
const handleError = useThrottle(
  (response: any) => {
    const err = (text?: string) => {
      notification.error({
        title: text ?? response?._data?.message,
      })
    }
    if (!response._data) {
      err('請求超時，服務器無響應！')
      return
    }
    const handleMap: { [key: number]: () => void } = {
      404: () => err('服務器資源不存在'),
      500: () => err('服務器內部錯誤'),
      403: () => err('沒有權限訪問該資源'),
      401: () => {
        navigateTo('/')
      },
    }
    handleMap[response.status] ? handleMap[response.status]() : ''
  },
  3000,
  { trailing: false },
)
/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const fetch = async <T>(url: UrlType, options?: any, headers?: any) => {
  try {
    // 3.0正式版环境变量要从useRuntimeConfig里的public拿
    const {
      public: { apiBase },
    } = useRuntimeConfig()
    const reqUrl = apiBase + url // 你的接口地址
    // 设置key
    const key = hash(options + url)
    // 可以设置默认headers例如
    const customHeaders = {
      'Content-Security-Policy': "frame-ancestors 'none'",
      'content-type': 'application/json;charset=UTF-8',
      accept: 'application/json, text/plain, */*',
      ...headers,
    }
    const { data, error, pending, refresh } = await useFetch(reqUrl, {
      // 響應攔截
      async onResponse({ response }) {
        // if (!response?._data.status) {
        //     console.log(response)
        //     // notification.error({
        //     //     title: response?._data.message,
        //     // })
        //     return Promise.reject(response)
        // }
        // 在這裡判斷錯誤
        // return response.status >= 200 && response.status <= 299
        //     ? Promise.resolve(response?._data)
        //     : Promise.reject(response)
      },
      async onResponseError({ response }) {
        handleError(response)
        return Promise.resolve(response ?? null)
      },
      ...options,
      key,
      headers: customHeaders,
    })
    const result = data.value as ResOptions<T>
    const err = { ...error.value }
    if (error.value) {
      if (process.client) {
        return Promise.reject(err)
      }
      throw createError({
        statusCode: 500,
        statusMessage: reqUrl,
        message: error.value?.data?.message || '服務器錯誤',
      })
    }
    return { data: result, pending, refresh, error: err } // 这里直接返回data或者其他的
  } catch (err) {
    console.log(err)
    return Promise.reject(err)
  }
}

export const useHttp = {
  get<T>(url: string, params?: any, headers?: any) {
    return fetch<T>(url, { method: 'get', params }, headers)
  },

  post<T>(url: string, body?: any, headers?: any) {
    return fetch<T>(url, { method: 'post', body }, headers)
  },

  put<T>(url: string, body?: any, headers?: any) {
    return fetch<T>(url, { method: 'put', body }, headers)
  },

  delete<T>(url: string, body?: any, headers?: any) {
    return fetch<T>(url, { method: 'delete', body }, headers)
  },
}
