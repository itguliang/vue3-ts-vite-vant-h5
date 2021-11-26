import { getUserInfo } from '@/api/user'
import { Store } from 'vuex';
export interface UserState {
	name: string,
}

const state = () => ({
	info: '首页信息呀呀呀呀呀',
})

const getters = {}

const mutations = {
	SET_NAME(state: any, name: string) {
		state.name = name
	},
}

const actions = {
	async GetUserInfo(store: Store<UserState>) {
		const userInfo: any = await getUserInfo()
		if (userInfo) {
			store.commit('SET_NAME', userInfo.user.name)
		}
	},
	updateName(store: Store<UserState>) {
		store.commit('SET_NAME', '90909090')
	}
	// LogOut({ commit }) {
	// 	return new Promise(resolve => {
	// 		console.log('登出...')
	// 		commit('SET_TOKEN', '')
	// 		commit('SET_NAME', '')
	// 		commit('SET_AVATAR', '')
	// 		resolve(1)
	// 	})
	// }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}