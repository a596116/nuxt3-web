export interface LineBotSetting {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
  nike_broadcast: boolean
  hypebeast_broadcast: boolean
  ithome_broadcast: boolean
}

enum Api {
  default = 'liff/setting',
}
export const lineBotSetting = {
  /**
   * @description 取得設定
   */
  fetch(id: string) {
    return useHttp.get<LineBotSetting>(`${Api.default}/${id}`)
  },

  /**
   * @description 更新設定
   */
  update(body: LineBotSetting) {
    return useHttp.put<LineBotSetting>(`${Api.default}/${body.userId}`, { ...body })
  },
}
