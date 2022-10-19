<script setup lang="ts">
import { 测试, 测试1 } from '../article'
const props = defineProps({
  no: {
    type: String,
    default: '',
  },
})

const activeComponent = computed(() => {
  return [
    测试,
    测试1,
  ][props.no]
})
</script>

<template>
  <div>动态路由</div>
  <component :is="activeComponent" />
</template>

<style lang="less" scoped>

</style>
