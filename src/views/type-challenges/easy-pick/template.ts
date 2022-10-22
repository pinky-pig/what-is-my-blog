
// 这里 K extends keyof T 就是保证K的属性都在T中有，才能筛选，相当于 if(key in k) => true
// [P in K] 遍历 K
// T[P] 返回经过筛选的对象
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}


// 有测试用例，明确题意，写出js的代码
const Todo = {
  title: '',
  description: '',
  completed: true
}
/**
 * 将一个对象的属性，筛选，然后返回。
 * @param K 初始化的对象
 * @param P 要筛选出来的对象的属性
 * @returns 经过筛选属性的对象
 */
const myPick = (K = Todo, P = ['title', 'completed']) => {
  // 初始化对象
  const result = {}
  // 逻辑处理
  P.forEach(key => {
    // 从传进来的对象中，根据传进来的数组，筛选出对应的key值，返回出去
    // 这里需要判断，原始数据K中，一定有这个属性
    if (key in K) {
      result[key] = K[key]
    }
  })

  return result
}
