import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import {getUserInfo} from '@/api/user'

export interface UserState {
  now: number;
}
export const key: InjectionKey<Store<UserState>> = Symbol();

export default createStore<UserState>({
  state: {
    now: Date.now()
  },
  mutations: {
    setNow(state, data: number) {
      state.now = data;
    }
  },
  actions: {
    getTime({commit}){
      commit('setNow', 100)
    },
    // async GetUserInfo ({ commit }) {
    //   const userInfo: any = await getUserInfo()
    //   if(userInfo) {
    //     commit('setNow', 100)
    //   }
    // },
    LogOut({ commit }) {
      return new Promise(resolve => {
        console.log('登出...')
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        commit('SET_AVATAR', '')
        resolve(1)
      })
    }
  }
});

export function appStore() {
  return baseUseStore(key);
}
