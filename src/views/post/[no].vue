<script setup lang="ts">
import { modules, modulesRaw } from '../article'
const props = defineProps({
  no: {
    type: String,
    default: '0',
  },
})

// const m = Object.assign(modules, modulesRaw)
// 通过读取文件内容生成列表
interface frontmatter {
  file: string
  title: string
  time: Date
  content: string
}
const li = ref<frontmatter[]>([])
const promiseArr = Object.keys(modulesRaw).map((i) => {
  return new Promise<void>((resolve) => {
    modulesRaw[i]().then((res) => {
      const o = useMdFrontmatter(res)
      if (o.title !== '')
        li.value.push({ file: i, ...o, time: new Date(o.time) })
      resolve()
    })
  })
})
// 按时间排序
await Promise.all(promiseArr).then(() => {
  li.value = li.value.sort((a, b) => a.time.getTime() - b.time.getTime())
  li.value.forEach((i) => {
    // 这里是异步组件被包装成了响应式的对象，为了避免不必要的性能开销，用markRaw函数包一下
    Object.assign(i, {
      component: markRaw(modules[i.file] as any),
    })
  })
})

const activeComponent = computed(() => {
  return li.value[props.no].component
})
</script>

<template>
  <CustomCard class="wrapper">
    <component :is="activeComponent" />
  </CustomCard>
</template>

<style lang="less" scoped>

</style>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: false
  id: 1234
  string: '1234'
</route>
