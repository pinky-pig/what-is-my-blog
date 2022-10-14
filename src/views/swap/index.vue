<script setup lang="ts">
import { useSwap } from './index'
const { grids, body, control } = useSwap()
const symbolFn = i => Symbol(i)

const normalizeItem = (i) => {
  if (body.value.includes(Number(i)))
    return '🍔'
  else
    return i
}

onMounted(() => {
  control()
})
</script>

<template>
  <div
    class="w-200px grid gap-1"
    :class="`grid-rows-${grids.length} grid-cols-${grids[0].length}`"
  >
    <div
      v-for="it in grids.flat()"
      :key="symbolFn(it)"
      class=" w-8 h-8 flex justify-center items-center bg-gray-500 text-white"
    >
      {{ normalizeItem(it) }}
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
