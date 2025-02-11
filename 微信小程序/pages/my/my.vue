<template>
	<view>
		<view>
			<u-notice-bar mode="vertical" :list="msg">123</u-notice-bar>
		</view>
		
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
			<view class="u-m-r-10">
				<u-avatar :src="form.url" size="140"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{form.username}}</view>
				<view class="u-font-14 u-tips-color" >{{form.account}}</view>
			</view>
			<!-- <view class="u-m-l-10 u-p-10">
				<u-icon name="scan" color="#969799" size="28"></u-icon>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view> -->
		</view>
		
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="account-fill" title="个人信息" @click="info"></u-cell-item>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="star" title="收藏" @click="favorite"></u-cell-item>
				<u-cell-item icon="photo" title="二手交易管理" @click="secondHand"></u-cell-item>
				<u-cell-item icon="coupon" title="校园互助管理" @click="assistance"></u-cell-item>
				<u-cell-item icon="heart" title="我的论坛" @click="formManage"></u-cell-item>
			</u-cell-group>
		</view>
		<view class="button">
			<u-cell-group>
				<u-button type="error" @click="quite" width="40rpx">退出登录</u-button>
			</u-cell-group>
		</view>
		
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	export default {
		data() {
			return {
				show:true,
				form: {},
				m:"",
				msg:[]
			}
		},
		onLoad() {
			// console.log(uni.getStorageSync("token").username);
			this.form=uni.getStorageSync("token")
			request.get("notifications/last").then(res => {
				console.log(res.data);
				this.msg=res.data
			})
		},
		onShow(){
			this.form=uni.getStorageSync("token")
		},
		methods: {
			info(){
				uni.navigateTo({
					url:"/pages/PersonalInfo/PersonalInfo"
				})
			},
			quite(){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			secondHand(){
				uni.navigateTo({
					url:"/pages/secondHand/secondHandManage"
				})
			},
			assistance(){
				uni.navigateTo({
					url:"/pages/assistance/assistanceManage"
				})
			},
			favorite(){
				uni.navigateTo({
					url:"/pages/secondHand/favorite"
				})
			},
			formManage(){
				uni.navigateTo({
					url:"/pages/forum/forumManage"
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
.button{
	width: 180rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	margin-top: 40rpx;
}
</style>
