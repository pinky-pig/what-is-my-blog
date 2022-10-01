import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-vue-markdown'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import Pages from 'vite-plugin-pages'

import path from 'path'

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'


export default defineConfig({
  base:'/what-is-my-blog/',
  plugins: [
    vue(),
    Unocss({ /* options */ }),
    Layouts(),
    Pages({
      dirs: 'src/views',
      extensions: ['vue', 'md'],
    }),
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/store',
        'src/composables',
      ],
      vueTemplate: true,
    }),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src'),
      '~': path.resolve(__dirname,'src')
    }
  },
})
