import { request } from '@/plugins/request'
export default {
	async login(data) {
		const res = await request.post('/api/users/login', data)
		return res
	},
	async registration(data) {
		const res = await request.post('/api/users', data)
		return res
	},
}
