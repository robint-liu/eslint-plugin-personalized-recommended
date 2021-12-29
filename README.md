## eslint-plugin-personalized-recommended
个性化定制eslint recommended
### 特性
- 支持 next.js eslint 推荐配置
- 支持 vue2.x eslint 推荐配置
- 支持常规 javaScript eslint 推荐配置
- 支持 ESmodule import 导入自动排序

### 安装
Install with npm:
```bash
npm i eslint-plugin-personalized-recommended -D
```
Install with yarn:
```bash
yarn add eslint-plugin-personalized-recommended -D
```

### 用法

在 `.eslintrc.*` 或 `eslintConfig` 或 `package.json` 的eslint 配置中如下配置：
```js
{
    "extends": [
        "plugin:personalized-recommended/vue-recommended"
        // ···others
    ],
    /* ···other config··· */ 
}
```
