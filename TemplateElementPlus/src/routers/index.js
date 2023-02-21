import { createRouter, createWebHistory } from 'vue-router';
import Permission from '../stores/permission';
import needPermissionRoutes from './needPermissionRoutes';

export const routes = [
  {
    path: `/login`,
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'mainView',
    children: [...needPermissionRoutes],
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/main'
  }
];

// console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const { path } = to;

  // 權限紀錄
  if (localStorage.getItem(Permission.name) && Permission.get().length === 0) {
    Permission.set(JSON.parse(localStorage.getItem(Permission.name)));
  }

  // 權限判斷
  if (path != '/login' && Permission.get().length === 0) {
    next('/login');
  }

  next();
});

export default router;
