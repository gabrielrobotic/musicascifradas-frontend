import { createRouter, createWebHistory } from 'vue-router'
import CampoHarmonicoView from '../views/CampoHarmonicoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/campo-harmonico',
      name: 'campo-harmonico',
      component: CampoHarmonicoView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
