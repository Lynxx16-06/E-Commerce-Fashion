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
      path: '/sendal',
      name: 'sendal',
      component: () => import('../components/Sendal.vue'),
    },
    {
      path: '/hoodie',
      name: 'hoodie',
      component: () => import('../components/Hoodie.vue'),
    },
    {
      path: '/mostpopular',
      name: 'mostpopular',
      component: () => import('../components/MostPopular.vue'),
    },
    {
      path: '/bestrating',
      name: 'bestrating',
      component: () => import('../components/BestRating.vue'),
    },
    {
      path: '/lowtohigh',
      name: 'lowtohigh',
      component: () => import('../components/LowToHigh.vue'),
    },
    {
      path: '/hightolow',
      name: 'hightolow',
      component: () => import('../components/HighToLow.vue'),
    },
    {
      path: '/white',
      name: 'white',
      component: () => import('../components/White.vue'),
    },
    {
      path: '/:pathMacth(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
