interface Menu {
    name: string
    link: string
    children?: Menu[]
}
export const menus: Menu[] = [
    {
        name: '作品',
        link: '/collection',
    },
    {
        name: '文章',
        link: '/posts',
    },
]