export function useSwap() {
  const basicX = 5
  const basicY = 5
  const arena = ref<string[]>([])

  // 初始化bg数组
  function initArena() {
    arena.value = Array.from({ length: basicX * basicY }, (i, idx) => `${idx}`)
  }
  initArena()
  // 初始化bg，切割数组
  const grids = computed(() => {
    const result = [] as any
    while (result.length < basicX)
      result.push(arena.value.slice(basicX * result.length, basicX * (result.length + 1)))

    return result
  })

  return {
    grids,
    basicX,
    basicY,
    initArena,
  }
}
