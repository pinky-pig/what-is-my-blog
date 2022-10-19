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
  <component :is="activeComponent" />
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
