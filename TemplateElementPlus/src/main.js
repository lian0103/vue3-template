import { createApp } from 'vue';
import 'element-plus/dist/index.css';
import './assets/main.scss';
import App from './App.vue';
import router from './routers/index';

const app = createApp(App);

app.use(router).mount('#app');
