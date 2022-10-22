# ts-challenge

2022/10/22
今天开始 type-challenge

首先第一步 Hello world 🤣

Go！

打开 playground ，发现如下代码

```ts
/* _____________ Your Code Here _____________ */

type HelloWorld = any // expected to be a string


/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
```

控制台报两个errors

```ts
Errors in code
Type 'false' does not satisfy the constraint 'true'.
Type 'false' does not satisfy the constraint 'true'.
'cases' is declared but never used.
```

这个时候，还不知道怎么姿势去code的时候，注意力集中在左边 

`/* _____________ Your Code Here _____________ */`

这里就是要code的地方

下面的

`/* _____________ Test Cases _____________ */`

顾名思义，就是测试用例了。这里的单元测试，就是很常见的关键字

```ts
// expect 期待的数据 ；equal 等于 ；NotAny 不是any类型
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

// 测试用例， HelloWorld 不是any类型；等于string类型
type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
```

在本地调试

由上可知，这里需要两部分，一部分是写的code，一部分是测试用例。这里去github/type-challenge仓库可以看到，也是分为两个文件template.ts和test-cases.ts

这里以hello-world举例子

本地新建一个文件夹hello-world

然后新建两个文件

```ts
// template.ts
type HelloWorld = any // expected to be a string
```

```ts
// test-cases.ts
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
```

这个时候发现需要引入依赖"'@type-challenges/utils'"

```bash
pnpm i @type-challenges/utils
```

然后这个时候，import没问题了，只有测试用例报错，说明测试生效了，这里的测试没有通过测试用例

原因在与 template.ts 中  HelloWorld 的类型是 any

但是测试用例是：不是any类型是string类型

这里改为

```ts
type HelloWorld = string 
```

然后发现测试用例就不报错了，这里测试通过了
