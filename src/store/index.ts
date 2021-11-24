
import { createStore } from 'vuex'
import user from './modules/user' 
export default createStore({
  modules: { 
    user: user
  },
//   // 以下属于根节点的
//   state: {},
//   mutations: {},
//   actions: {},
//   getters: {}
})
