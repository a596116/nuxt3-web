// 存儲localstorage
export const storage = {
  /**
   * @description: 設置localStorage
   * @param {string} key
   * @param {any} data
   * @param {number} expire 單位秒 token存放時間
   */
  set(key: string, data: any, expire?: number): void {
    if (expire) {
      expire = new Date().getTime() + expire * 1000
    }
    localStorage.setItem(key, JSON.stringify({ data, expire }))
  },
  /**
   * @description: 獲取localStorage
   * @param {string} key
   */
  get(key: string): any {
    const cacheStore = localStorage.getItem(key)
    if (cacheStore) {
      const cache = JSON.parse(cacheStore)
      const expire = cache?.expire
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key)
        return null
      }
      return cache.data
    }
    return null
  },
  /**
   * @description: 移除localStorage
   * @param {array} key
   */
  remove(...key: string[]) {
    key.forEach((v) => {
      localStorage.removeItem(v)
    })
  },
}
