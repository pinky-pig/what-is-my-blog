<script setup lang="ts">
import { useBody, useSwap } from './index'
const { grids } = useSwap()
const { body, bodyR, control } = useBody()
const symbolFn = i => Symbol(i)

const normalizeItem = (i) => {
  if (body.value.includes(Number(i)))
    return '🍔'
  if (bodyR.value.includes(Number(i)))
    return '🍟'
  else
    return i
}

onMounted(() => {
  control()
})
</script>

<template>
  <div
    class=" grid gap-1 grid-rows-10 grid-cols-10"
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
