import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth/login',
      component: () => import('@/views/auth/Index.vue'),
      children: []
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      component: () => import('@/views/auth/Index.vue'),
      children : [
        {
          path: 'login',
          component: () => import('@/views/auth/LoginPage.vue')
        },
        {
          path: 'register',
          component: () => import('@/views/auth/LoginPage.vue')
        },
        {
          path: 'retrieve-password',
          component: () => import('@/views/auth/LoginPage.vue')
        }
      ]
    },
    {
      path: '/work-space',
      component: () => import('@/views/work-space/Index.vue')
    },
  ]
})

export default router
