import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'ui-app',
      component: () => import('../views/AppView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/warehouses',
      name: 'warehouses',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
