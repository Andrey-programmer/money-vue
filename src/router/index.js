import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'authLayout'
    },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {
      layout: 'mainLayout'
    },
    component: () => import('@/views/Categories.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      layout: 'mainLayout'
    },
    component: () => import('@/views/History.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      layout: 'mainLayout'
    },
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {
      layout: 'mainLayout'
    },
    component: () => import('@/views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'mainLayout'
    },
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/records',
    name: 'records',
    meta: {
      layout: 'mainLayout'
    },
    component: () => import('@/views/Records.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'authLayout'
    },
    component: () => import('@/views/Register.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
