# GT前端專案模板
版本號: v0.0.10-beta-4      
整合常用基底Vite、TailwindCSS、SCSS、Auto Import等配置。     


## 建立專案
```shell=
npx gt-template@[版本號] [projectName] [template]

// ex. npx gt-template Hello 

// ex. npx gt-template Hello elementPlus
```
### template
#### /Template 預設模板
- Vite
- Vue3
- Vue-router
- Axios
- vueuse/core
- Gsap
- TailwindCSS
- SCSS

#### /TemplateElementPlus 
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
- eslint
- eslint-plugin-vue
- Prettier

**登入與權限驗證流程**      
透過Vue-Router Guard管控、Web LocalStorage和共用Stores來實現。


**官方推薦Pinia**
優點之一 dev tool整合
![](https://i.imgur.com/uWnUGKd.png)

## VSCODE設定

- 安裝插件
Prettier - Code formatter
ESLint

- \[工作區設定\] 指向在專案內的.prettierrc
![](https://i.imgur.com/UAZxPoP.png)


## 相關連結
[gt-template](https://www.npmjs.com/package/gt-template)      
[Vite](https://cn.vitejs.dev/)     
[VueRouter](https://router.vuejs.org/)     
[ElementPlus](https://element-plus.org/zh-CN/)      


