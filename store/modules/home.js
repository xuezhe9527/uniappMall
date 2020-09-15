import request from '../../utils/request.js'
const state = {
	// initData:'111',
	indexData:{}
}

const mutations = {
	// CHANGETEST(state){
	// 	state.initData = "222"
	// }
	SETINDEXDATA(state,arg){
		state.indexData = arg
	}
}
	
const actions = {
	// testActions({commit}){
	// 	commit('CHANGETEST')
	// }
	//获取首页数据
	async getIndexData({commit}){
		let result = await request('/getIndexData')
		// console.log(result)
		if(!result){
			console.log("请求失败")
		}else{
			// this.indexData = result
			commit('SETINDEXDATA',result)
		}
	}
}

const getters = {}

export default{
	state,
	mutations,
	actions,
	getters
}