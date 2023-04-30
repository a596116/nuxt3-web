<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

useHead(() => ({
  title: capitalize(t('pages.collection.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.collection.description'),
    },
  ],
}))

const htmlContent = ref(
  '<p>&emsp;&emsp;几个月前我刚接触vue3时就研究过，一直搞忘了分享。</p> <fieldset><legend>起因</legend><p>&emsp;&emsp;我的vue项目一般都使用动态导入的svg-sprite，意思是：既要是个雪碧图，用<code>&lt;use&gt;</code> 标签复用；而且页面的svg应该是动态按需加载的。我觉得这样性能比较好，在vue2中<a href="https://github.com/yunyuyuan/cloudflare-blog/blob/master/components/svg-icon.vue#L28" target="_blank">实现比较简单</a>，但是vue3+vite下我并未找到合适的解决方案，只有雪碧图没有动态导入。于是乎我就想自己做一个。</p> </fieldset><h3><sup class="fake-head" id="id-%E6%80%9D%E8%B7%AF"></sup><a class="header-link" href="#id-%E6%80%9D%E8%B7%AF">思路</a></h3><p><strong>就两点</strong></p> <ul> <li>首先要做一个<a href="https://cn.vitejs.dev/guide/api-plugin.html" target="_blank">vite plugin</a>，作为一个loader加载<code>.svg</code>文件，读取svg文件的内容，类似<code>raw-loader</code>。</li> <li>然后需要一个component，它去动态加载svg文件，并把svg文件的内容拼接到雪碧图里。</li> </ul> <h3><sup class="fake-head" id="id-%E4%BB%A3%E7%A0%81"></sup><a class="header-link" href="#id-%E4%BB%A3%E7%A0%81">代码</a></h3><p><code>vite.config.ts</code>中这样写:</p> <pre><code class="language-ts">import {defineConfig, Plugin} from &#39;vite&#39; import vue from &#39;@vitejs/plugin-vue&#39; import fs from &quot;fs&quot;; import {dataToEsm} from &quot;rollup-pluginutils&quot;; const rawSvgPlugin:Plugin = { name: &#39;raw-svg-file-loader&#39;, transform(svg: string, filepath: string) { // 判断后缀是否为svg if (filepath.slice(-4) !== &#39;.svg&#39;) return null; const content = fs.readFileSync(filepath).toString() return { // 直接返回svg文件的原始内容 code: dataToEsm(content) } }, } export default defineConfig({ plugins: [vue(), rawSvgPlugin], }) </code></pre> <p><code>IconSvg.vue</code>文件:</p> <pre><code class="language-ts">&lt;template&gt; &lt;svg aria-hidden=&quot;true&quot;&gt; &lt;use :href=&quot;getName&quot;&gt;&lt;/use&gt; &lt;/svg&gt; &lt;/template&gt; &lt;script lang=&quot;ts&quot;&gt; import {defineComponent} from &quot;vue&quot;; const svgParser = new DOMParser(); export default defineComponent({ name: &quot;IconSvg&quot;, props: { name: { type: String, default: &#39;&#39; } }, data (){ return { getName: &#39;&#39; } }, watch: { // 监听 name 变化 &#39;$props.name&#39;: { // 首次执行 immediate: true, async handler (){ // 拼接svg文件名 const getId = `icon-${this.name}` const name = `#${getId}` // 动态加载 const res = await import(`../svg/${this.name}.svg`); // 雪碧图的DOM容器 let container = document.querySelector(&#39;#_SVG_SPRITE_CONTAINER_&#39;); if (!container || !container.querySelector(name)) { if (!container) { // 如果还未创建容器，就创建一个。(此处也可以直接写在index.html里) container = document.createElement(&#39;div&#39;); container.id = &#39;_SVG_SPRITE_CONTAINER_&#39; container.setAttribute(&#39;xmlns&#39;, &#39;http://www.w3.org/2000/svg&#39;) container.setAttribute(&#39;style&#39;, &#39;position: absolute; width: 0; height: 0;overflow: hidden&#39;) document.body.insertBefore(container, document.body.children[0]); } if (!container.querySelector(name)) { // 如果容器内没有该svg，则解析并制作该svg的雪碧图 const svgElement = svgParser.parseFromString(res.default, &quot;image/svg+xml&quot;).querySelector(&#39;svg&#39;); if (svgElement) { //删除影响样式的属性 for (const key of [&#39;width&#39;, &#39;height&#39;, &#39;x&#39;, &#39;y&#39;]) { svgElement.removeAttribute(key) } svgElement.id = getId // 插入到容器里 container.appendChild(svgElement as SVGSVGElement) } } } this.getName = name; } } }, }) &lt;/script&gt; </code></pre> <p>在<code>main.ts</code>里只需要全局注册IconSvg组件就行了:</p> <pre><code class="language-ts">import { createApp } from &#39;vue&#39; import App from &#39;./App.vue&#39; import IconSvg from &quot;./assets/svg/IconSvg.vue&quot;; createApp(App).component(&#39;svg-icon&#39;, IconSvg).mount(&#39;#app&#39;) </code></pre> <p>这样使用:</p> <pre><code class="language-html">&lt;!-- 对应home.svg --&gt; &lt;svg-icon name=&quot;home&quot;/&gt; </code></pre> <h3><sup class="fake-head" id="id-%E5%B0%8F%E7%BB%93"></sup><a class="header-link" href="#id-%E5%B0%8F%E7%BB%93">小结</a></h3><p>这样做问题是解决了，可以动态导入svg并生成雪碧图，但是方式有点不优雅，有点投机取巧的感觉<img src="/sticker/yellow-face/47.png?ran=1682755052896" alt="sticker"/></p>',
)
</script>

<template>
  <Wrapper class="bg-hd-Bg">
    <HeadTitle :title="$t('pages.collection.title')" :style="1" />
    <ContentList v-slot="{ list }" path="/collections">
      <section v-for="(article, index) in list" :key="index">
        <div
          v-for="(group, groupId) in article.links"
          :key="`link-group-${groupId}`"
          class="max-xs:w-full mx-auto mt-4 w-[65%] max-md:w-[85%]">
          <span class="ml-1 border-l-2 pl-3 text-lg font-normal">{{ group.title }}</span>
          <div class="mt-3 flex w-full flex-wrap justify-between gap-5">
            <div
              v-for="(item, itemId) in group.items"
              :key="`link-${itemId}`"
              class="w-[30%] cursor-pointer max-md:w-[48%] max-sm:w-full">
              <div
                class="min-h-[150px] rounded-xl border px-4 py-3 transition-[0.3s] hover:-translate-y-1 hover:border hover:shadow-lg">
                <Anchor :href="item.url" rel="noopener noreferrer" class="no-underline">
                  <div class="flex w-full items-center">
                    <span class="flex-1 text-ellipsis whitespace-nowrap font-semibold">
                      {{ item.sitename }}
                    </span>
                    <img
                      :src="item.img"
                      class="h-[50px] w-[50px] rounded-[100%] p-2 shadow-[inset_0_0_10px_rgba(0,0,0,.3)]" />
                  </div>
                  <div
                    class="mt-2 overflow-hidden text-ellipsis border-t border-dashed border-t-[#ddd] py-2.5 text-xs leading-4">
                    {{ item.desc }}
                  </div>
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContentList>
  </Wrapper>
</template>
