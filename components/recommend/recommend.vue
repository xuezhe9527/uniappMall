<template>
	<view class="recommendContainer">
		<!-- recommendContainer -->
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="bannerSwiper">
			<swiper-item class="bannerItem">
				<image class="bannerImg" src="https://yanxuan.nosdn.127.net/2c6fcfd7184c4f373cf4f8ea69c85b8c.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item class="bannerItem">
				<image class="bannerImg" src="https://yanxuan.nosdn.127.net/68a183dd200b412bd2d8941d4740a49e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item class="bannerItem">
				<image class="bannerImg" src="https://yanxuan.nosdn.127.net/2c6fcfd7184c4f373cf4f8ea69c85b8c.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>		
		</swiper>
		<!-- 中间的网易严选广告文本 -->
		<view class="adWrapper">
			<!-- <view class="adItem">
				<image src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" mode=""></image>
				<text>网易严选品牌</text>
			</view> -->
			<view class="adItem" v-for="(ad) in indexData.policyDescList" :key="ad.icon">
				<image :src="ad.icon" mode=""></image>
				<text>{{ad.desc}}</text>
			</view>			
		</view>
		
		<view class="kingKongList" v-if="indexData.kingKongModule">
			<!-- <view class="kingKongItem">
				<image src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" mode=""></image>
				<text>生活门类</text>
			</view> -->
			<view class="kingKongItem" v-for="(kingKong) in indexData.kingKongModule.kingKongList" :key="kingKong.L1Id">
				<image :src="kingKong.picUrl" mode=""></image>
				<text>{{kingKong.text}}</text>
			</view>
				
		</view>
		<Categorys v-for="(categoryItem) in indexData.categoryModule" :categoryItem="categoryItem" :key="categoryItem.titlePicUrl"/>
	</view>
		
		
	
</template>

<script>
	import Categorys from '../categorys/categorys.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState({
				indexData:state=>state.home.indexData
			})
		},
		components:{
			Categorys
		}
	}
</script>

<style lang="stylus">
	.recommendContainer
		.bannerSwiper
			height 350upx
			// width 100%
			.bannerItem				
				.bannerImg
					width 100%
					height 100%
		.adWrapper
			margin-top 20upx
			display flex
			justify-content space-around
			.adItem
				image
					width 32upx
					height 32upx
					vertical-align middle
				text
					font-size 24upx
					vertical-align middle
		.kingKongList
			display flex
			flex-wrap wrap
			.kingKongItem
				display flex
				flex-direction column
				align-items center
				width 20%
				image
					width 110upx
					height 110upx
				text
					font-size 24upx
		
</style>
