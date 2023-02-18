# GT前端專案模板

整合常用基底Vite、TailwindCSS、SCSS、Auto Import等配置

## 建立專案
```shell=
npx gt-template@[版本號] [projectName] [template target]

// ex. npx gt-template Hello 

// ex. npx gt-template Hello elementPlus

```
### template target
預設為 /template
- Vite
- Vue3
- Vue-router
- Axios
- vueuse/core
- Gsap
- TailwindCSS
- SCSS

模板 /TemplateElementPlus
- Vite
- Vue3
- Vue-router
- ElementPlus
    已設置[按需打包](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)
- Axios 
    已封裝 ./utils/request.js
- vueuse/core
- Gsap
- @element-plus/icons-vue
- SCSS

## NPM
[NPM倉庫](https://www.npmjs.com/package/gt-template)

---
更新日: 2023.02.18
