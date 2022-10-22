import type { Equal, Expect } from '@type-challenges/utils'
// 通过测试用例，明确题意
// 1. Todo 类型有三个属性
// 2. 经过处理，返回的类型要么有 title 属性，要么要 title 或 competed 属性
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
