<template>
	<view class="indexContainer">
		<!-- 头部搜索框部分 -->
		<view class="header">
			<image class="img" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<view class="iconfont icon-sousuo">
					
				</view>
				<input class="searchInput" type="text" value="" placeholder="搜索商品" placeholder-class="placeholderClass"/>
			</view>
			<button  class="username">七月</button>
		</view>
		<!-- scrollview导航栏部分 -->
		<scroll-view scroll-x="true" class="navScroll" v-if="indexData.kingKongModule" >
			<view class="scrollItem" :class="currentIndex===-1?'active':''" @click="changeNavIndex(-1)">推荐</view>
			<!-- <view class="scrollItem">美食酒水</view> -->
			<view 
				class="scrollItem"
				 v-for="(item,index) in indexData.kingKongModule.kingKongList" 
				:key="item.L1Id"
				:class="currentIndex===index?'active':''"
				@click="changeNavIndex(index)"
				>{{item.text}}				
			</view>			
		</scroll-view>
		<!-- {{initData}} -->
		<scroll-view scroll-y="true" class="recommendScroll">
			<Recommend v-if="currentIndex===-1"/>
			<CateList v-else :navIndex="currentIndex"/>
		</scroll-view>
		
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	import Recommend from '../../components/recommend/recommend.vue'
	import CateList from '../../components/cateList/cateList.vue'

	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				// indexData:{},
				currentIndex:-1
			}
		},		
		async mounted(){
			// let result = await request('http://localhost:3003/getIndexData')
			// let result = await request('/getIndexData')
			// // console.log(result)
			// if(!result){
			// 	console.log("请求失败")
			// }else{
			// 	this.indexData = result
			// }
			this.$store.dispatch("getIndexData")
		},
		methods: {
			//切换导航栏
			changeNavIndex(index){
				this.currentIndex = index
				// this.$store.dispatch("testActions")
			},	
		},
		computed:{
			...mapState({
				// initData:state=>state.home.initData
				indexData:state=>state.home.indexData
			}),
			
		},
		components:{
			Recommend,
			CateList
		},
		onLoad() {
		
		},
	}
</script>

<!-- hbuilderX 可以打包stylus，所以不必再npm下载stylus和stylus-loader dededegit-->
<style lang="stylus">
	.indexContainer 
		.header
			height 60upx
			// margin 20upx 0
			padding 20upx 0
			display flex
			align-items center
			.img 
				width 116upx
				height 40upx
				flex-shrink 0  
				margin  0upx 20upx
			.search
				height 100%
				background #ededed
				border-radius 10upx
				// flex-shrink 0
				position relative
				.icon-sousuo
					position absolute
					left 20upx
					top 50%
					transform  translateY(-50%)
				.searchInput
					padding-left 60upx
					height 60upx
					.placeholderClass
						line-height 60upx
						text-align center
						font-size 22upx
						text-indent -60upx
			.username
				width 144upx
				height 60upx
				font-size 28upx
				line-height 60upx
				margin  0upx 20upx
				flex-shrink 0
				color red
		.navScroll
				white-space nowrap
			.scrollItem
				display inline-block
				width 140upx
				height 80upx
				line-height 80upx
				text-align center
				margin 0 20upx
				&.active
					border-bottom 4upx solid red
		.recommendScroll
			height calc(100vh - 184upx - var(--window-top) - var(--window-bottom)) 
			// 加这个样式是为了在h5和信小程序上显示的时候不会拖动搜索框
			// css的变量(新语法):可以在root中定义一个全局变量,然后用var()取这个值
			// :root{
			// 	--a:red
			// }
			// var(--a)
</style>
