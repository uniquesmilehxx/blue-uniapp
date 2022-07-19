<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			// 机型
			const platform = uni.getSystemInfoSync().platform
			if (platform ==='ios') {
				console.log('我是iOS')
			} else if (platform ==='android') {
				console.log('我是安卓')
			} else if (platform === 'devtools') {
				console.log('我是开发者工具')
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	@import '@/static/css/common.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
