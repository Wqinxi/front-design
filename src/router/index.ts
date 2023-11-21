import { createRouter, createWebHistory } from 'vue-router'
import RefuelAreaRouter from "@/router/modules/refuel-area";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
routes: [
    {
      path: '/',
      redirect: '/auth/login',
      component: () => import('@/views/auth/Index.vue'),
      children:[]
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
          component: () => import('@/views/auth/RegisterPage.vue')
        },
        {
          path: 'retrieve-password',
          component: () => import('@/views/auth/RetrievePassword.vue')
        }
      ]
    },
    {
      path: '/work-space',
      component: () => import('@/views/work-space/Index.vue'),
      children:[
        RefuelAreaRouter,
      ]
    },
  ]
})

export default router
