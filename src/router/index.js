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
        component:()=>import('../components/welcome')
      },
      {
        path: '/goods',
        meta:{title:"商品管理"},
        component:()=>import('../views/shop/shop.vue')
      },
      {
        path: '/shopDetail',  //商品详情
        component:()=>import('../views/shop/shopDetail')
      },
      {
        path: '/category',
        meta: { title: '品类管理' },
        component:()=>import('../views/shop/category')
      },
      {
        path: '/order',
        meta: { title: '订单管理' },
        component:()=>import('../views/order/order')
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
