import { useAuth } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/campo-harmonico',
      name: 'campo-harmonico',
      component: () => import('@/views/CampoHarmonicoView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach(async (to, from) => {
  const auth = useAuth()
  auth.isAuthenticated = auth.token ? await auth.checkToken() : false
  if (to.meta.auth) {
    if (!auth.token) { return { name: 'login' } }
    if (!auth.isAuthenticated) { return { name: 'login' } }
  }
})

export default router
