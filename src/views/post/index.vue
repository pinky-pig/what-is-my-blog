<script setup lang="ts">
import '../article/index'
import { modules } from '~/views/article'

const router = useRouter()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
if (isLargeScreen.value) {
  router.push({ path: '/post/0' })
}

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
  <CustomCard>
    <div class="flex flex-col">
      <div
        v-for="(it, idx) in list"
        :key="idx"
        class="list"
        @click="router.push({ path: `/post/${idx}` })"
      >
        第 {{ idx + 1 }} 期 - {{ it }}
    </div>
    </div>
  </CustomCard>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: false
  id: 1234
  string: '1234'
</route>

