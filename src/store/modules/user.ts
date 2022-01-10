import { getUserInfo } from '@/api/user'
import { Store } from 'vuex';
export interface UserState {
	name: string,
}

const state = () => ({
	name: 'yuyu',
	detail: null,
})

const getters = {}

const mutations = {
	SET_NAME(state: any, name: string) {
		state.name = name
	},
	SET_DETAIL(state: any, detail: string) {
		state.detail = detail
	},
}

const actions = {
	async GetUserInfo(store: Store<UserState>) {
		const response = await getUserInfo()
		console.log(response)
		if (response) {
			store.commit('SET_DETAIL', response.data)
		}
	},
	updateName(store: Store<UserState>) {
		store.commit('SET_NAME', '90909090')
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}