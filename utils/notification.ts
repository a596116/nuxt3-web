import { ElNotification, type NotificationHandle } from "element-plus"

/**
 * 封裝Notification
 */
interface Options {
    title?: string
    subTitle?: string | Array<any>,
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
    offset?: number
    showClose?: boolean
    duration?: number
}
class Notification {
    private TransformMes(mes: String | Array<any>) {
        return typeof mes == 'string' ? h(
            'p',
            { style: 'color: gray' },
            mes
        ) : (mes as []).map((item: any) => {
            return h(
                'p',
                { style: 'color: gray' },
                item
            )
        })
    }
    private messagePop(type: 'success' | 'error' | 'warning' | 'info', options: Options): NotificationHandle {
        return ElNotification({
            title: '',
            message: h(
                'div',
                {
                    class: 'box',
                },
                [
                    h('p', { style: 'color: black;font-size:16px' }, options.title),
                    options.subTitle && h('div', { class: 'content', style: 'color: black;font-size:12px' }, this.TransformMes(options.subTitle!))
                ]
            ),
            type: type,
            position: options.position || 'top-right',
            offset: options.offset || undefined,
            showClose: options.showClose || true,
            duration: options.duration || 3500,
        })
    }

    /**
     * 成功
     * @param {any} options:MessageOptions
     */
    success(options: Options) {
        return this.messagePop('success', options)
    }
    /**
     * 錯誤
     * @param {any} options:MessageOptions
     */
    error(options: Options) {
        return this.messagePop('error', options)
    }
    /**
     * 提示
     * @param {any} options:MessageOptions
     */
    warning(options: Options) {
        return this.messagePop('warning', options)
    }
    /**
     * 訊息
     * @param {any} options:MessageOptions
     */
    info(options: Options) {
        return this.messagePop('info', options)
    }
}
export const notification = new Notification()