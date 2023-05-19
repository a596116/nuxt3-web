// import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import axios from 'axios'
export default defineEventHandler(async (event) => {

    // const docs = await serverQueryContent(event).find()
    const sitemap = new SitemapStream({
        hostname: 'http://localhost:3000'
    })

    const dad = await axios({
        method: 'get',
        url: 'https://870c-220-141-228-159.ngrok-free.app/user/role',
        data: {
            page: 1,
            take: 10
        },
        headers: {

        }
    }).then((res) => {
        // console.log(res.data)
    })
    // for (const doc of docs) {
    sitemap.write({
        url: '/',
        changefreq: event.req.url
    })
    // }
    sitemap.end()

    return streamToPromise(sitemap)
})