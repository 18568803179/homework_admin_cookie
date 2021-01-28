import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        meta:{title:'欢迎'},
        component:()=>import('../views/page/welcome')
      },
      {
        path: '/goods',
        meta:{title:"商品管理"},
        component:()=>import('../views/page/shop.vue')
      },
      {
        path: '/category',
        meta: { title: '品类管理' },
        component:()=>import('../views/page/category')
      },
      {
        path: '/order',
        meta: { title: '订单管理' },
        component:()=>import('../views/page/order')
      }
    ]
  },
  {
    path: '/',
    component:()=>import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
