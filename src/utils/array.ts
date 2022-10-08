// 1. 给定范围内的随机数 getRandom(70, 80)
export const getRandom = (n: number, m: number) => Math.floor(Math.random() * (m - n + 1) + n)

