 const needPermissionRoutes = [
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

export default needPermissionRoutes;
