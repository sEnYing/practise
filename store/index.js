import Vue from 'vue'
import Vuex from 'vuex'
const cookieparser = process.server ? require('cookie-parser') : undefined

Vue.use(Vuex)
export default () => {
	return new Vuex.Store({
		state: {
			user: null,
		},
		mutations: {
			setUser(state, user) {
				state.user = user
			},
		},
		actions: {
			nextServerInit({ commit }, { req }) {
				let auth = null
				if (req.headers.cookie) {
					const parsed = cookieparser.parse(req.headers.cookie)
					try {
						auth = JSON.parse(parsed.user)
					} catch (err) {}
				}
				commit('setUser', auth)
			},
		},
	})
}
