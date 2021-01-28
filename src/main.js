import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//按需引入element
import './plugins/element.js'
//挂载axios
import axios from 'axios'
Vue.prototype.$axios = axios
//公共样式
import './config/css/reset.css'



//全局过滤器注册
import * as filters from './config/filters/filters'
console.log(filters);
Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
