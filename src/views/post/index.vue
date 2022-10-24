<script setup lang="ts">
import '../article/index'
import { modules, modulesRaw } from '~/views/article'
import Nginx from '~/views/article/Nginx配置.md?raw'
const router = useRouter()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
watchEffect(() => {
  if (isLargeScreen.value)
    router.push({ path: '/post/0' })
})

// 通过文件名称生成列表
const reg = /\.\/(\S*)\.md/
let list = Object.keys(modules).map((item) => {
  const result = item.match(reg)
  if (result)
    return result[1]
  else
    return ''
})
// 删除假值 false 0 undefined null NaN
list = list.filter(Boolean)

// 通过读取文件内容生成列表
interface frontmatter {
  title: string
  time: string
  content: string
}
const li = ref<frontmatter[]>([])
Object.keys(modulesRaw).forEach((i) => {
  modulesRaw[i]().then((res) => {
    const o = useMdFrontmatter(res)
    if (o.title !== '')
      li.value.push(o)
  })
})
</script>

<template>
  <div class="w-full gap-3 flex flex-wrap">
    <div
      v-for="(it, idx) in li"
      :key="idx"
      mx-auto
      w-full max-w-72 md:w-72 flex
      flex-col justify-center rounded-md
      shadow-md bg-white
      overflow-hidden @click="router.push({ path: `/post/${idx}` })"
    >
      <img
        class=" h-52 rounded-t-md w-full max-w-72 md:w-72"
        src="https://gw.alipayobjects.com/zos/k/bv/IMG_1115.jpg?x-oss-process=image/resize,w_500"
        :alt="`第 ${idx + 1} 期 - ${it.title}`"
        style="background: linear-gradient(rgb(236, 233, 230), rgb(255, 255, 255));"
      >
      <div class="w-full flex justify-between items-center leading-tight pt-4 px-3 box-border">
        <div class="font-bold text-black">
          第 {{ idx + 1 }} 期 - {{ it.title }}
        </div>
        <div class="text-grey-darker text-sm text-gray-500">
          {{ it.time }}
        </div>
      </div>
      <p class="text-gray-500 text-sm w-94 overflow-hidden pt-2.5 line-clamp-2 px-3 w-full h-12 box-border">
        {{ it.content }}
      </p>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: false
  id: 1234
  string: '1234'
</route>

