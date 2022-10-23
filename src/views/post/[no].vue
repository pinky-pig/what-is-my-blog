<script setup lang="ts">
import { modules } from '../article'
const props = defineProps({
  no: {
    type: String,
    default: '0',
  },
})

const activeComponent = computed(() => {
  return Object.values(modules)[props.no]
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
