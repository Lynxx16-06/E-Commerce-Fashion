import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/Company.vue'),
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/celana',
      name: 'celana',
      component: () => import('../components/Celana.vue'),
    },
    {
      path: '/sepatu',
      name: 'sepatu',
      component: () => import('../components/Sepatu.vue'),
    },
    {
      path: '/baju',
      name: 'baju',
      component: () => import('../components/Baju.vue'),
    },
    {
      path: '/:pathMacth(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
