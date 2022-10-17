const basicX = 10
const basicY = 10
export function useSwap() {
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

export function useBody(l = [53, 63], r = [55, 65]) {
  // 初始化body数组
  const f = l[l.length - 1] - r[r.length - 1]
  const bodyL = f < 0 ? ref(l) : ref(r)
  const bodyR = f < 0 ? ref(r.reverse()) : ref(l.reverse())

  /**
   * 移动某个对象
   * @param b 移动的对象
   * @param d 移动的方向
   */
  const move = (b, d) => {
    const h = b[0]
    b.unshift(h + d)
    b.pop()
  }

  const control = () => {
    // 移动的方向
    const d = {
      right: 1,
      left: -1,
      up: -basicX,
      down: basicX,
    }

    // bodyL
    const runLA = ['up', 'up']
    runLA.splice(2, 0, ...Array.from({ length: Math.abs(f) }, () => 'right'))
    runLA.push(...Array.from({ length: bodyL.value.length + 1 }, () => 'down'))
    runLA.forEach((i: string, idx: number) => {
      setTimeout(() => {
        move(bodyL.value, d[i])
      }, 500 * (idx + 1))
    })

    // bodyR
    const runRA = ['down', 'down']
    runRA.splice(2, 0, ...Array.from({ length: Math.abs(f) }, () => 'left'))
    runRA.push(...Array.from({ length: bodyR.value.length + 1 }, () => 'up'))
    runRA.forEach((i: string, idx: number) => {
      setTimeout(() => {
        move(bodyR.value, d[i])
      }, 500 * (idx + 1))
    })
  }

  return {
    bodyL,
    bodyR,
    control,
  }
}
