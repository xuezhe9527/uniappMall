<template>
	<view class="categoryContainer">
		<view class="bigBanner">
			<!-- <image src="https://yanxuan.nosdn.127.net/14318a2168c8c0b6d8e2ed60dcbed570.jpg" mode=""></image> -->
			<image :src="categoryItem.titlePicUrl" mode=""></image>
		</view>
		<scroll-view scroll-x="true" class="categoryScroll">
			<!-- <view class="categoryScrollItem">
				<view class="imagePart">
					<image src="https://yanxuan-item.nosdn.127.net/ea324a88d74978c5a11fe99ece5734ae.png" mode=""></image>
				</view>				
				<text>随时随地喝热水 3秒即热便携式迷你开水机</text>
			</view> -->
			<view class="categoryScrollItem" v-for="(category) in categoryItem.itemList" :key="category.id">
				<view class="imagePart">
					<!-- <image src="https://yanxuan-item.nosdn.127.net/ea324a88d74978c5a11fe99ece5734ae.png" mode=""></image> -->
					<image :src="category.showPicUrl" mode=""></image>
				</view>				
				<!-- <text>随时随地喝热水 3秒即热便携式迷你开水机</text> -->
				<text>{{category.name}}</text>
			</view>
			<view class="categoryScrollItem more">
				更多信息>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:["categoryItem"]
	}
</script>

<style lang="stylus">
	.categoryContainer
		// width 100%
		margin 20upx 0
		.bigBanner
			image		
				height 370upx
				width 100%
		.categoryScroll
			white-space nowrap
			.categoryScrollItem
				margin  0 20upx
				width 200upx
				display inline-block
				vertical-align top
				.imagePart								
					image 
						width 200upx
						height 200upx
						background #eee
				text 
					font-size 24upx
					white-space pre-wrap //文本可以换行（这里需要覆盖之前继承父类的样式）
					overflow hidden
					display -webkit-box
					-webkit-line-clamp 2
					-webkit-box-orient vertical
					text-overflow ellipsis
				&.more
					vertical-align top
					background #eee
					height 200upx
					width 200upx
					line-height 200upx
					font-size 24upx
					text-align center

</style>
