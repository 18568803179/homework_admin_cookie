import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component:()=>import('../views/page/shop.vue')
      }
    ]
  },
  {
    path: '/login',
    component:()=>import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
