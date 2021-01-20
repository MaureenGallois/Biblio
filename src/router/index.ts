import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'communaute',
        component: () => import('@/views/communaute.vue')
      },
      {
        path: 'favoris',
        component: () => import('@/views/favoris.vue')
      },
      {
        path: 'myprofil',
        component: () => import('@/views/profil.vue')
      },
      {
        path: '/home/livre',
        component: () => import('@/views/livre.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
