// 条件渲染 微信小程序不存在跨域问题
//#ifdef H5
var baseURL = "/api"
//#endif

//#ifdef MP-WEIXIN
 var baseURL = "http://localhost:3003"
//#endif

export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseURL+url,
			data,
			method,
			success(res){
				return resolve(res.data)
			},
			fail(){
				return resolve(false)
			}
		})
	})
}