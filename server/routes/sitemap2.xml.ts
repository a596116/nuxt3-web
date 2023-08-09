// import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
export default defineEventHandler(async (event) => {
    // const docs = await serverQueryContent(event).find()
    event.res.setHeader('Content-Type', 'application/xml')
    const sitemap = new SitemapStream({
        hostname: 'https://wanghaodai.crossgoo.com/',

    })
    const page = ['/', 'about/', 'collection/', 'posts/', 'music/']
    // for (const doc of docs) {
    page.forEach((doc) => {
        sitemap.write({
            url: doc,
            changefreq: 'daily',
            lastmod: new Date().toISOString(),
            priority: 1.0,
        })
    })
    // }
    sitemap.end()

    return streamToPromise(sitemap)
})