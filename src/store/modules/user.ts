import { getUserInfo } from '@/api/user'
import { Store } from 'vuex';
export interface UserState {
	detail: object,
}

const state = () => ({
	detail: null,
})

const getters = {}

const mutations = {
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
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}