import type { FetchResponse, SearchParameters } from 'ofetch'
import type { Ref } from 'vue'
import type { UseFetchOptions } from '#app'
// import { useUserStore } from '~/stores/user.store'
export interface ResOptions<T> {
    status: boolean
    message: string
    modifydate: string
    data: T
    current_page?: number
    last_page?: number
    total?: number
    per_page?: number
}

type UrlType = string | Request | Ref<string | Request> | (() => string | Request)

export type HttpOption<T> = UseFetchOptions<ResOptions<T>>

const handleError = <T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>) => {
    const err = (text: string) => {
        ElMessage.error(response?._data?.message ?? text)
    }
    if (!response._data) {
        err('请求超时，服务器无响应！')
        return
    }
    // const userStore = useUserStore()
    const handleMap: { [key: number]: () => void } = {
        404: () => err('服務器資源不存在'),
        500: () => err('服務器內部錯誤'),
        403: () => err('沒有權限訪問該資源'),
        401: () => {
            err('登入狀態已過期，需要重新登入')
            // userStore.clearUserInfo()
            navigateTo('/')
        },
    }
    handleMap[response.status] ? handleMap[response.status]() : err('未知错误！')
}
// get方法传递数组形式参数
const paramsSerializer = (params?: SearchParameters) => {
    if (!params)
        return

    const query = useCloneDeep(params)
    Object.entries(query).forEach(([key, val]) => {
        if (typeof val === 'object' && Array.isArray(val) && val !== null) {
            query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v))
            delete query[key]
        }
    })
    return query
}
const fetch = <T>(url: UrlType, option: any) => {
    return useFetch<ResOptions<T>>(url, {
        // 請求攔截
        onRequest({ options }) {
            // get方法传递数组形式参数
            options.params = paramsSerializer(options.params)
            // 添加baseURL,nuxt3环境变量要从useRuntimeConfig里面取
            const { public: { apiBase } } = useRuntimeConfig()
            options.baseURL = apiBase
            // 添加请求头,没登录不携带token
            // const token = storage.get(CacheEnum.TOKEN_NAME)
            // if (!token)
            //     return
            // options.headers = new Headers(options.headers)
            // options.headers.set('Authorization', `Bearer ${token}`)
        },
        // 響應攔截
        async onResponse({ response }) {
            if (response.headers.get('content-disposition') && response.status === 200) {
                return response
            }
            // 在這裡判斷錯誤
            if (!response._data.status) {
                handleError<T>(response)
                return Promise.reject(await response._data)
            }
            // 成功返回
            return response._data
        },
        // 錯誤處理
        onResponseError({ response }) {
            handleError<T>(response)
            return Promise.reject(response?._data ?? null)
        },
        // 合并参数
        ...option,
    })
}

export const useHttp = {
    get: <T>(url: UrlType, params?: any, option?: HttpOption<T>) => {
        return fetch<T>(url, { method: 'get', params, ...option })
    },

    post: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
        return fetch<T>(url, { method: 'post', body, ...option })
    },

    put: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
        return fetch<T>(url, { method: 'put', body, ...option })
    },

    delete: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
        return fetch<T>(url, { method: 'delete', body, ...option })
    },
}
