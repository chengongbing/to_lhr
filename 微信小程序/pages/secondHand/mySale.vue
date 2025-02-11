<template>
	<!-- <view class="index" style="margin: 6rpx;">
		      <u-notice-bar mode="vertical" :list="list" height="20px"></u-notice-bar>
		<view class="index">
			<IndexSwiper></IndexSwiper>
			<uptodate></uptodate>
			<u-icon name="photo"></u-icon>
			<u-button type="primary" @click="quite">退出</u-button>
		</view>
	</view> -->
<view>
	<MySale></MySale>
</view>

</template>

<script>
	import MySale from '@/components/secondHand/MySale.vue';
	export default {
		data() {
			return {
				list: [
									'寒雨连江夜入吴',
									'平明送客楚山孤',
									'洛阳亲友如相问',
									'一片冰心在玉壶'
								]
			}
		},
		components: {
			MySale
		},
		onLoad() {

		},
		methods: {
			quite() {
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
		}
	}
</script>

<style scoped>
	.wx-nav {
		height: 140rpx;
		width: 100%;
		/* line-height-step: 200rpx; */
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>