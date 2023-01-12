import { createApp } from 'vue';
import './assets/main.scss';
import App from './App.vue';
import router from './routers/index';

const app = createApp(App);

app.use(router).mount('#app');
