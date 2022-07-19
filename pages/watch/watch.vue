<template>
	<view class="test-scss">
		test
	</view>
</template>

<script>
	import { apiTest } from '@/static/js/api.js'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onShow() {
			// 执行测试请求
			apiTest()
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/variables.scss';
	
	// 使用scss变量的示例
	.test-scss {
		// 使用 uni.scss
		color: $uni-primary;
		// 使用自定义scss文件
		background-color: $yellow;
	}
	
</style>
