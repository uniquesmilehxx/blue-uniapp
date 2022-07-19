
const hosts = require('./host')

const request = function ({
		host = hosts.host,
		url,
		method = 'GET',
		data = {},
		header
	}) {
	// 测试
	uni.setStorageSync('token', '116987309790870309dc27c36465d314')
	
	return new Promise((resolve, reject) => {
		uni.request({
			method,
			url: host + url,
			data,
			header: Object.assign({
				// 'Content-Type': 'application/x-www-form-urlencoded',
				'X-Token': wx.getStorageSync('token')
			}, header),
			// dataType: 'json',
			success: (res) => {
				// 在这里可以根据code码做统一处理
				const { code } = res.data
				if (code === -100) {
					// 登录失效
					// 清除所有缓存
					uni.clearStorageSync()
					uni.showToast({
					  title: '登录失效，请重新登录',
					  icon: 'none'
					})
				} else {
					resolve(res.data)
				}
			}, 
			fail: (err) => {
				reject(err)
			}
		})
	});
}

export {
	request
}