<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swpier1.jpg"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swpier2.jpg"></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"index",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	swiper{
		width: 100%;
		height: 360rpx;
	}
.swiper-img{
		width: 100%;
		height: 360rpx;
		margin: 4rpx;
	}
</style>