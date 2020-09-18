<template>
	<view class="categoryContainer">
		<!-- category -->
		<!-- 头部 -->
		<view class="header">
			<view class="search">
				搜索商品
			</view>
		</view>
		<!-- 内容部分 -->
		<view class="content">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="leftScroll">			
					<!-- <view class="scrollItem">居家生活</view>		 -->
					<view class="scrollItem" :class="currentId===category.id?'active':''"
					@click="changeNavId(category.id)" 
					v-for="(category) in categoryDatas" 
					:key="category.id">{{category.name}}</view>
						
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="rightScroll"  v-if="cateList">
					<view class="mainPic">
						<image src="https://yanxuan.nosdn.127.net/7df1fb797a6c7ba34ccb5cacde7d3e99.jpg?type=webp&imageView&quality=75&thumbnail=0x196" mode=""></image>
					</view>
					<!-- <view class="rightScrollItem">
						<image src="http://yanxuan.nosdn.127.net/749f0ba087d2035b6d2937b4919952de.png" mode=""></image>
						<text>秋冬好物</text>
					</view> -->
					<view class="rightScrollItem" v-for="(cate) in cateList.subCateList" :key="cate.id">
						<image :src="cate.wapBannerUrl" mode=""></image>
						<text>{{cate.name}}</text>
					</view>				
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js';
	export default {
		data() {
			return {
				currentId:null,
				categoryDatas:[]
			};
		},
		async mounted(){
			let result = await request('/getCategoryDatas')
			this.categoryDatas = result
			this.currentId = result[0].id
		},
		methods:{
			changeNavId(id){
				this.currentId = id
			}
		},
		computed:{
			cateList(){	
				// console.log(this.categoryDatas)
				// let result = this.categoryDatas.find((item,index)=>item.id===this.currentId)			
					let result1=this.categoryDatas.find((item,index)=>item.id===this.currentId);
					// console.log(result1)
					return result1
			}
		}
	}
</script>

<style lang="stylus">
	.categoryContainer		
		.header
			padding 10upx 20upx
			border-bottom 2upx solid #EEEEEE
			.search
				width 100%
				height 60upx;
				background #eee
				font-size 28upx
				border-radius 10upx
				line-height 60upx
				text-align center
		.content
			// height calc(100vh - 82upx)//不考虑兼容h5
			height calc(100vh - 82upx - var(--window-top) - var(--window-bottom))
			.leftContainer	
				float left
				height 100%
				width 20%
				box-sizing border-box
				border-right 1px solid #eee				
				.leftScroll
					height 100%
					.scrollItem
						width 140upx
						height 80upx
						line-height 80upx
						text-align center
						font-size 28upx
						position relative
						&.active::after
							content ""
							position absolute
							width 4upx 
							height 60upx
							display block
							left 4upx 
							top 10upx
							background-color red
			.rightContainer	
				float right
				height 100%
				width 80%
				// background #bfa
				.rightScroll
					width 100%
					height 100%
					.mainPic
						width 100%
						image
							display block
							width 520upx 
							height 190upx
							margin 20upx auto
					.rightScrollItem
						width 33.3%
						display inline-flex
						flex-direction column
						align-items center					
						image
							width 160upx
							height 144upx
						text
							font-size 26upx
							
</style>
