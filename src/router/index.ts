import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Screen1', component: () => import('../views/Screen1.vue') },
  { path: '/screen-2', name: 'Screen2', component: () => import('../views/Screen2.vue') },
  { path: '/screen-3', name: 'Screen3', component: () => import('../views/Screen3.vue') },
  { path: '/screen-4', name: 'Screen4', component: () => import('../views/Screen4.vue') },
  { path: '/screen-5', name: 'Screen5', component: () => import('../views/Screen5.vue') },
  { path: '/screen-6', name: 'Screen6', component: () => import('../views/Screen6.vue') },
  { path: '/screen-7', name: 'Screen7', component: () => import('../views/Screen7.vue') },
  { path: '/screen-8', name: 'Screen8', component: () => import('../views/Screen8.vue') },
  { path: '/screen-9', name: 'Screen9', component: () => import('../views/Screen9.vue') },
  { path: '/screen-10', name: 'Screen10', component: () => import('../views/Screen10.vue') },
  { path: '/screen-11', name: 'Screen11', component: () => import('../views/Screen11.vue') },
  { path: '/screen-12', name: 'Screen12', component: () => import('../views/Screen12.vue') },
  { path: '/screen-13', name: 'Screen13', component: () => import('../views/Screen13.vue') },
  { path: '/screen-14', name: 'Screen14', component: () => import('../views/Screen14.vue') },
  { path: '/screen-15', name: 'Screen15', component: () => import('../views/Screen15.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
