import axios from 'axios'

const sitemap = {
  path: '/sitemap.xml', // sitemap名稱，不用改
  hostname: 'https://kentgoo.joinbuy.co', // 網址
  cacheTime: 10, // 10分鐘 站點路由更新頻率，只在 generate: false有用
  gzip: true, // 生成 .xml.gz 檔的 sitemap
  generate: false, // 允許使用 nuxt generate 生成
  // 排除會員後台頁面 / 購物車頁面 / 結帳頁等
  exclude: [
    '/',
  ],

  routes: [
    {
      url: `/`,
      changefreq: "daily",
      lastmod: new Date(),
      priority: 1,
    },
  ]
}

export default sitemap
