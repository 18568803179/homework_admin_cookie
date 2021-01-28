import Vue from 'vue'
import Vuex from 'vuex'
//在store中的index.js 引入
import persist from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: {
      username: ''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  // 在vuex配置项内添加一个：
  plugins: [
    new persist({
      storage: window.localStorage,
    }).plugin,
  ],
})
