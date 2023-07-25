interface Menu {
    name: string
    link?: string
    children?: Menu[]
}
export const menus: Menu[] = [
    {
        name: '作品',
        link: '/collection',
        children: [
            {
                name: '分類',
                children: [
                    {
                        name: 'Web',
                        link: '/collection?type=Web',
                    },
                    {
                        name: 'API',
                        link: '/collection?type=API',
                    },
                    {
                        name: 'LineBot',
                        link: '/collection?type=LineBot',
                    },
                ]
            },
        ]
    },
    {
        name: '文章',
        link: '/posts',
    },
    {
        name: 'Music',
        link: '/music',
    },
]