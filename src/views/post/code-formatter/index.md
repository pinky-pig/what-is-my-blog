---
name: blog
---

<style>
  span,p{
    font-family:'Neucha',LXGW WenKai,LXGW WenKai Mono,'Patrick Hand','Patrick Hand SC';
  }
  h1,h2,h3{
    font-family:'Neucha',LXGW WenKai,LXGW WenKai Mono,'Patrick Hand','Patrick Hand SC';
  }
  .prose{
    background:white;
    padding:1.5rem;
    box-sizing: border-box;
    border-radius:1rem;
    border-color: #41403e;
    border-style: solid;
    border-width: 2px;
  }
</style>

# 绕过预提交检查 eslint 和 husky

```bash
# 将git commit -m “XXX” 改为
git commit --no-verify -m “xxx”
```

# 预提交检查

使用的工具  
- 🐱‍🏍 vscode setting.json
- 🐱‍🚀 [eslint](https://cn.eslint.org/docs/rules/)
- 🚠 [husky](https://typicode.github.io/husky/#/)
- 🚒 [commitlint](https://commitlint.js.org/#/)
- 🚀 [cz-customizable](https://github.com/leoforfree/cz-customizable) 
- 🚢 [commitlint-config-cz](https://github.com/whizark/commitlint-config-cz)
- 🍌 [gitmoji](https://gitmoji.dev/)
- 🍉 [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)

使用到的工具的配置文件

- Git 协作流程 - https://www.yuque.com/arvinxx-fe/workflow/bqd3m0
- commitlint - https://commitlint.js.org/#/
- gitmoji - https://gitmoji.dev/
- eslint中文 - https://cn.eslint.org/docs/rules/


生成的文件目录

- */.husky* : husky
  - */.husky/_* : 配置文件
  - */.husky/commit-msg : 提交信息
  - */.husky/pre-commit : git hooks 检查
- */.cz-config.js : 交互式提交配置文件
- */.eslintignore : eslint 忽略文件
- */.eslintrc.js : eslint 规则配置文件
- */commitlint.config.js : commitlint 配置文件
- */CHANGELOG.md : 生成的 log 文件


## 1. ESLint


安装 ESLint 和需要使用的规则（可选，这里使用的是 [@antfu/eslint-config](https://github.com/antfu/eslint-config)）

```bash
pnpm i -D eslint 
pnpm i -D @antfu/eslint-config 
```

设置脚本命令

```bash
npm set-script lint "eslint ."
```

```json
// package.json
{
  "lint": "eslint .",
}
```
.eslintrc.js 配置文件

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: '@antfu/eslint-config',
  rules: {
    // 禁止出现 console
    'no-console': 'off',
    // 禁止出现 debugger
    'no-debugger': 'off',
    // @typescript-eslint禁止出现未使用过的变量
    '@typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['**/*.md', '**/*.md/*.*', 'demo.vue', 'scripts/*.ts', '*.test.ts'],
      rules: {
        'no-alert': 'off',
        'no-console': 'off',
      },
    },
  ],
}

```

.eslintignore 忽略文件

```text
# eslint 忽略检查 (根据项目需要自行添加)
node_modules
dist
public
*.sh
lib
*.md
*.woff
*.ttf
.vscode
.idea
/dist/
/public
/docs
.local
package.json
!.env-config.ts
components.d.ts
*.config.ts
/src/utils/gis
/src/utils/test
/src/utils/three

```

## 2. Vscode 自动格式化 

下载安装`ESLint` 插件

 ```json
 {
     "recommendations": [
         "dbaeumer.vscode-eslint"
     ]
 }
 ```

onSave - 两种方式到达设置位置：

1. ctrl+shift+p 输入 setting.json 打开<首选项：打开用户设置(JSON)>
2. 找到设置，搜索文本框内输入 `onsave` ，找到 `Editor:Code Actions On Save`


```json
"editor.codeActionsOnSave": {
  "source.fixAll": false,
  "source.fixAll.eslint": true, // this allows ESLint to auto fix on save
  "source.organizeImports": false
},
```

## 3. 使用 husky 进行 commit 检查

1. 安装 husky 和 lint-stage

```bash
pnpm i lint-staged husky -D
```

2. 启用husky
```bash
npx husky install
```

3. 添加 command 到 package.json

```bash
npm set-script prepare "husky install"
```

4. 添加 git hooks （git提交钩子函数） 和 commit message 信息

```bash
npx husky add .husky/pre-commit "npm run lint"
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 
```

第一行命令会新增一个文件 `.husky/pre-commit` ， git commit的时候，会先走这里

```bash
# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
```

这里运行的 lint 命令，是运行 ESLint 校验。在上一步安装 ESLint 的时候新增的。

第二行命令会新增一个 `.husky/commit-msg` 文件，规范我们的commit message 信息

5. 添加 commitlint 

上面四步完成后，提交代码，会提示报错，这个时候需要我们安装 `commitlint `

```bash
pnpm i @commitlint/cli @commitlint/config-conventional -D
```

新建配置文件，并写入内容

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

```js
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
}
```

❗ 这个文件是 utf-8 格式编码的。如果是别的，会报错 `Parsing error`

```bash
1:0 error Pasing error: Invalid character
1 problem (1 error, 0 warnings)
```

然后就可以提交 `git commit -m 'style(home.vue):代码格式化`


❗ 如果 commit 的时候，报错 `require()`

```
Warning: require() of ES modules is not supported.
require() of [FULL PATH REDACTED]/commitlint-esm-bug-repro/commitlint.config.js from
```

我这里查询到的解决方法是将 `commitlint.config.js` 改为 `commitlint.config.cjs` 。 [github issues](https://github.com/conventional-changelog/commitlint/issues/902)

## 4. 交互式提交

```bash
# <emoji> <type>(<scope>): <subject>
✨ feat(blog): add comment section
```

这里有三步优化

- cz-customizable - 自定义 commit 选项
- commitlint-config-cz - 合并 cz-customizable 的配置 
- [gitmoji](https://gitmoji.dev/) - git msg emoji 
- conventional-changelog - 生成 commit 日志

### a. `cz-customizable`

安装
```bash
pnpm i -D cz-customizable
```
配置文件
```js
// .cz-config.js
module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat:     新功能'
    },
    {
      value: ':bug: fix',
      name: '🐛 fix:      修复bug'
    },
    {
      value: ':tada: init',
      name: '🎉 init:     初始化'
    },
    {
      value: ':pencil2: docs',
      name: '✏️  docs:     文档变更'
    },
    {
      value: ':lipstick: style',
      name: '💄 style:    代码的样式美化'
    },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor: 重构'
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:     性能优化'
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test:     测试'
    },
    {
      value: ':rewind: revert',
      name: '⏪️ revert:   回退'
    },
    {
      value: ':package: build',
      name: '📦️ build:    打包'
    },
    {
      value: ':rocket: chore',
      name: '🚀 chore:    构建/工程依赖/工具'
    },
    {
      value: ':construction_worker: ci',
      name: '👷 ci:       CI related changes'
    }
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？'
  },
  allowCustomScopes: true,
  allowBreakingChanges: [':sparkles: feat', ':bug: fix'],
  subjectLimit: 72
}

```
使用（往`package.json`中添加新脚本）

```bash
npm set-script commit "git add . && cz-customizable"
```

以上，就可以运行 `npm run commit` 命令，然后在控制台选择，最后生成命令提交。


![20221009122538](https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20221009122538.png)


### b. `commitlint-config-cz`

合并 cz-customizable 的配置 {types,scopes,scopeOverrides} 和 commitlint 的配置 {type-enum,scope-enum}。这样，你就可以在一个地方维护 types 和 scopes。

安装
```bash
pnpm i commitlint-config-cz@0.13.3 -D
```

使用
```js
// commitlint.config.js 
module.exports = {
  extends: ['cz'],
}

```

### c. `gitemoji`

这里优化的是提交命令 `chore`、`feat`......等命令没有那么直观好看，使用对应`emoji`优化视觉

安装
```bash
pnpm i -D commitlint-config-git-commit-emoji
```

修改 `commitlint.config.js` 文件

```js
module.exports = {
  extends: ['git-commit-emoji', 'cz']
}
```

这样，就完成了emoji的添加，比如 

```bash
git commit -m ":rocket: chore: emoji"
```
多出来一个小火箭的emoji

![20221009133532](https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20221009133532.png)

### d.生成 commit 日志

这里生成日志也使用了 emoji

安装

```bash
pnpm i -D conventional-changelog-cli conventional-changelog-gitmoji-config
```

```bash
npm set-script changelog "conventional-changelog -p gitmoji-config -i CHANGELOG.md -s"
```

这样，运行 `npm run changelog` 就能生成如下提交日志

![20221009134252](https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20221009134252.png)


<hr>

> 以上，就配置好了代码及提交规范检查。
