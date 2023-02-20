import { createRouter, createWebHistory } from 'vue-router';
import Permission from '../stores/permission';

export const needPermisionRoute = [
  {
    path: '/main',
    meta: {
      title: '使用者'
    },
    components: {
      mainView: () => import('../views/PageA.vue')
    }
  },
  {
    path: '/auth',
    meta: {
      title: '權限'
    },
    components: {
      mainView: () => import('../views/PageB.vue')
    }
  }
];

export const routes = [
  {
    path: `/login`,
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'mainView',
    children: [...needPermisionRoute],
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/main'
  }
];

console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const { path } = to;
  // console.log('path', path);

  // 權限紀錄
  if (localStorage.getItem(Permission.name) && Permission.getValidRoutes().length === 0) {
    Permission.setValidRoutes(JSON.parse(localStorage.getItem(Permission.name)));
  }

  // 權限判斷
  if (path != '/login' && Permission.getValidRoutes().length === 0) {
    console.log('iNNN?');
    next('/login');
  }

  next();
});

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});

export default router;
