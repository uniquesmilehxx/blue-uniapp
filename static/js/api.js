// 引入接口域名（需要额外的host时使用）
const hosts = require('./host')
// 引入请求方法
import { request } from './request'

// 测试接口
export function apiTest () {
	return request({
		url: '/mobile/user/userinfo',
	})
}
