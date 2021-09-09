# Backstage_management_system


## 技术栈

- 开发工具：vscode
- 构建语言：TypeScript 4.x
- 构建工具：Webpack 5.x
- 前端框架：Vue 3
- 路由工具：Vue Router 4.x
- 状态管理：Vuex 4.x
- UI框架：Element Plus
- CSS预编译：Less
- HTTP工具：Axios
- Git Hook 工具：Husky
- 代码规范：EditorConfig + Prettier + ESLint
- 提交规范： Commitizen + CommitLint





## 项目搭建

### 使用VueCli脚手架搭建

```shell
vue creaet vue3-ts-cms
```

选择

- Babel
- TypeScript
- Router
- Vuex
- CSS Pre-processors
- Linter
- 3.x
- ESLint + Prettier

### 配置EditorConfig

1. 下载VSCode插件`EditorConfig for VS Code`
2. 根目录下新建`.editorconfig`文件

```shell
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

### 安装prettier工具

1. 下载VSCode插件`Prettier-Code formatter`
2. 安装prettier`npm install prettier -D`
3. 根目录下新建`.prettier`文件，配置如下

```shell
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

3. 根目录下新建`.prettierignore`忽略文件，配置如下

```shell
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

### 使用ESLint

1. 下载VSCode插件`ESLint`
2. VueCLi创建项目时选择ESLint环境，并且选择解决eslint和prettier冲突兼容

### 使用git Husky

- 保证提交代码之前都将eslint中的问题解决掉了
- 执行 `git commit ` 命令的时候对其进行校验，如果不符合eslint规范，那么自动通过规范进行修复；

```shell
npx husky-init
npm install
```

#### 增加代码提交风格

使用Commitizen，帮助编写规范 commit message 的工具

1. 安装commitizen
2. 安装cz-conventional-changelog，并且初始化cz-conventional-changelog

```shell
npm install commitizen -D
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

3. 在package.json文件新增脚本

```shell
  "scripts": {
    "commit": "cz"
  },
```

commit时可以使用`npm run commit`

#### 代码提交验证

通过commitlint来限制不规范代码的提交

1. 安装`@commitlint/config-conventional 和 @commitlint/cli`

```shell
npm i @commitlint/config-conventional @commitlint/cli -D
```

2. 根目录下创建`commitlint.config.js`，配置如下

```shell
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

3. 使用husky生成commit-msg文件，验证提交信息：

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

### 安装Element Plus

```shell
npm install element-plus
```

按需引入

为了使main.ts文件简洁，element组件放到另外文件注册

```typescript
// main.ts 文件下新增
import { globalRegisterApp } from './global'
app.use(globalRegisterApp)
```

根目录下新增文件

- global
  - index.ts
  - register-element.ts

```typescript
// index.ts
import { App } from 'vue'
import registerElement from './register-element'

export function globalRegisterApp(app: App): void {
  app.use(registerElement)
}
```

```typescript
// register-elements.ts
import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
	//引入组件
} from 'element-plus'

const components = [
	// 注册组件
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
```
