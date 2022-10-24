<script setup lang="ts">
import '../article/index'
import { modules } from '~/views/article'

const router = useRouter()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
watchEffect(() => {
  if (isLargeScreen.value)
    router.push({ path: '/post/0' })
})

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
</script>

<template>
  <div class="w-full gap-3 flex flex-wrap">
    <div
      v-for="(it, idx) in list"
      :key="idx"
      mx-auto w-full max-w-72 md:w-72
      flex flex-col justify-center
      rounded-md shadow-md
      bg-white overflow-hidden
    >
      <img
        class=" h-52 rounded-t-md w-full max-w-72 md:w-72"
        src="https://gw.alipayobjects.com/zos/k/bv/IMG_1115.jpg?x-oss-process=image/resize,w_500"
        :alt="`第 ${idx + 1} 期 - ${it}`"
        style="background: linear-gradient(rgb(236, 233, 230), rgb(255, 255, 255));"
      >
      <div class="w-full flex justify-between items-center leading-tight pt-4 px-3 box-border">
        <div class="font-bold text-black">
          第 {{ idx + 1 }} 期 - {{ it }}
        </div>
        <div class="text-grey-darker text-sm text-gray-500">
          2022/10/24
        </div>
      </div>
      <p class="text-gray-500 text-sm w-94 overflow-hidden pt-2.5 line-clamp-2 px-3 w-full h-12 box-border">
        封面来源于周六径山花海的航拍图，风和日丽露营还是很舒服的。今天刚好是 1024 程序员节日，一直觉得日子过得还是需要有些仪式感才比较好，周末写了一个小彩蛋「
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

