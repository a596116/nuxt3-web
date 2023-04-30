// import { serverQueryContent } from '#content/server'
// import { SitemapStream, streamToPromise } from 'sitemap'

// export default defineEventHandler(async (event) => {

//     const docs = await serverQueryContent(event).find()

//     const sitemap = new SitemapStream({
//         hostname: 'http://localhost:3000'
//     })

//     for (const doc of docs) {

//         sitemap.write({
//             url: doc._path,
//             changefreq: event.req.url
//         })
//     }
//     sitemap.end()

//     return streamToPromise(sitemap)
// })