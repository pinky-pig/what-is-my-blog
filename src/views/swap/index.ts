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

  // 初始化body数组
  const body = ref([11, 16])
  const move = (d) => {
    const h = body.value[0]
    body.value.unshift(h + d)
    body.value.pop()
  }

  const control = () => {
    const d = {
      right: 1,
      left: -1,
      up: -basicX,
      down: basicX,
    }

    // 起飞(2)
    // 转向
    // 落下

    setTimeout(() => {
      move(d.up)
    }, 500)
    setTimeout(() => {
      move(d.right)
    }, 1000)
    setTimeout(() => {
      move(d.right)
    }, 1500)
    setTimeout(() => {
      move(d.down)
    }, 2000)
    setTimeout(() => {
      move(d.down)
    }, 2500)
  }

  return {
    grids,
    basicX,
    basicY,
    body,
    initArena,
    control,
  }
}

