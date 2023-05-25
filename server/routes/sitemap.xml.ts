// import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import axios from 'axios'
export default defineEventHandler(async (event) => {
    // const docs = await serverQueryContent(event).find()
    const sitemap = new SitemapStream({
        hostname: 'https://wanghaodai.com'
    })
    // const dad = await axios({
    //     method: 'get',
    //     url: 'https://870c-220-141-228-159.ngrok-free.app/user/role',
    //     data: {
    //         page: 1,
    //         take: 10
    //     },
    //     headers: {
    //         haodai: event.req.headers.host
    //     }
    // }).then((res) => {
    //     // console.log(res.data)
    // })
    const page = ['/', 'about', 'collection', 'posts', 'music']
    // for (const doc of docs) {
    page.forEach((doc) => {
        sitemap.write({
            url: doc,
            changefreq: 'daily',
        })
    })
    // }
    sitemap.end()

    return streamToPromise(sitemap)
})