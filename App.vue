<script>
	import request from './utils/request.js'
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
			//登录至微信会自己返回一个code
			wx.login({
				async success(res) {
					let {code} = res
					let result = await request("/getOpenId",{code})
					let openid = result
					// console.log(typeof openid)
					uni.setStorage({
						key:"opendId",
						data:openid
					})
				}
			})
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	/*每个页面公共css */
	@import url("./static/iconfont/iconfont.styl");
	
	page {
		height 100%
	}
</style>
