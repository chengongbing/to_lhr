<template>
	<view>
		<view class="wrap">
			<view style="margin: auto;display: flex;line-height: 100%;">
				<u-input v-model="keyword" placeholder="请输入内容" border="solid" background-color="white" />
				<u-button type="primary" @click="search" style="height: 40px;">搜索</u-button>
				<u-button type="primary" plain="" shape="square" plainstyle="height: 40px;" @click="add">增加</u-button>
			</view>
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change"
					:is-scroll="true" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[0]" :key="res.id">
								<view v-for="(item, i) in res.goodsList" :key="i">
									<view class="top">
										<view class="left">
											<u-icon name="hourglass-half-fill" :size="30"
												color="rgb(94,94,94)"></u-icon>
											<view class="time">时间：{{ item.time }}</view>
										</view>
										<!-- <view class="right" v-if="item.auditStatus==1">发布成功</view>
														<view class="right" v-if="item.auditStatus==0">发布失败</view> -->
									</view>
									<view class="item" @click="detail(index,i)">
										<view class="content">
											<view class="subject u-line-2">{{ item.subject }}</view>
											<view class="content">{{ item.content }}</view>
											<view class="location-time">{{ item.location }}</view>
										</view>
									</view>
									<view class="total">
										<!-- 折扣:<text
															style="font-weight: bold;font-size: 34rpx; color: crimson;margin-right: 10rpx;">{{item.discount}}</text>
				-->
										酬劳：
										<text class="total-price">
											<!-- 										￥{{ priceInt(totalPrice(res.goodsList)) }}. -->
											<text class="decimal">{{ item.price }}</text>
										</text>
									</view>
									<view class="bottom">
										<view class="more"><u-icon name="more-dot-fill"
												color="rgb(203,203,203)"></u-icon>
										</view>
										<view class="logistics btn" @click="favorite(index,i)">收藏</view>
										<view class="exchange btn" @click="detail(index,i)"
											style="background-color: #ff7900;color: white;">我感兴趣</view>
										<!-- <view class="evaluate btn">评价</view> -->
									</view>
				
								</view>
				
							</view>
							<!-- <u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore> -->
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[1]" :key="res.id">
								<view v-for="(item, i) in res.goodsList" :key="i">
									<view class="top">
										<view class="left">
											<u-icon name="hourglass-half-fill" :size="30"
												color="rgb(94,94,94)"></u-icon>
											<view class="time">时间：{{ item.time }}</view>
										</view>
										<!-- <view class="right" v-if="item.auditStatus==1">发布成功</view>
														<view class="right" v-if="item.auditStatus==0">发布失败</view> -->
									</view>
									<view class="item" @click="detail(index,i)">
										<!-- <view class="left">
											<image :src="item.goodsUrl" mode="aspectFill"></image>
										</view> -->
										<view class="content">
											<view class="subject u-line-2">{{ item.subject }}</view>
											<view class="content">{{ item.content }}</view>
											<view class="location-time">{{ item.location }}</view>
										</view>
										<!-- <view class="right">
															<view class="price">
																原价：￥{{item.originalPrice }}
																
															</view>
															
															<view class="number">x{{ item.quantity }}</view>
														</view> -->
									</view>
									<view class="total">
										<!-- 折扣:<text
															style="font-weight: bold;font-size: 34rpx; color: crimson;margin-right: 10rpx;">{{item.discount}}</text>
				-->
										酬劳：
										<text class="total-price">
											<!-- 										￥{{ priceInt(totalPrice(res.goodsList)) }}. -->
											<text class="decimal">{{ item.price }}</text>
										</text>
									</view>
									<view class="bottom">
										<view class="more"><u-icon name="more-dot-fill"
												color="rgb(203,203,203)"></u-icon>
										</view>
										<view class="logistics btn" @click="favorite(index,i)">收藏</view>
										<view class="exchange btn" @click="detail(index,i)"
											style="background-color: #ff7900;color: white;">我感兴趣</view>
										<!-- <view class="evaluate btn">评价</view> -->
									</view>
				
								</view>
				
							</view>
							<!-- <u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore> -->
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[2]" :key="res.id">
								<view v-for="(item, i) in res.goodsList" :key="i">
									<view class="top">
										<view class="left">
											<u-icon name="hourglass-half-fill" :size="30"
												color="rgb(94,94,94)"></u-icon>
											<view class="time">时间：{{ item.time }}</view>
										</view>
										<!-- <view class="right" v-if="item.auditStatus==1">发布成功</view>
														<view class="right" v-if="item.auditStatus==0">发布失败</view> -->
									</view>
									<view class="item" @click="detail(index,i)">
										<!-- <view class="left">
											<image :src="item.goodsUrl" mode="aspectFill"></image>
										</view> -->
										<view class="content">
											<view class="subject u-line-2">{{ item.subject }}</view>
											<view class="content">{{ item.content }}</view>
											<view class="location-time">{{ item.location }}</view>
										</view>
									</view>
									<view class="total">
										<!-- 折扣:<text
															style="font-weight: bold;font-size: 34rpx; color: crimson;margin-right: 10rpx;">{{item.discount}}</text>
				-->
										酬劳：
										<text class="total-price">
											<!-- 										￥{{ priceInt(totalPrice(res.goodsList)) }}. -->
											<text class="decimal">{{ item.price }}</text>
										</text>
									</view>
									<view class="bottom">
										<view class="more"><u-icon name="more-dot-fill"
												color="rgb(203,203,203)"></u-icon>
										</view>
										<view class="logistics btn" @click="favorite(index,i)">收藏</view>
										<view class="exchange btn" @click="detail(index,i)"
											style="background-color: #ff7900;color: white;">我感兴趣</view>
										<!-- <view class="evaluate btn">评价</view> -->
									</view>
				
								</view>
				
							</view>
							<!-- <u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore> -->
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[3]" :key="res.id">
								<view v-for="(item, i) in res.goodsList" :key="i">
									<view class="top">
										<view class="left">
											<u-icon name="hourglass-half-fill" :size="30"
												color="rgb(94,94,94)"></u-icon>
											<view class="time">时间：{{ item.time }}</view>
										</view>
										<!-- <view class="right" v-if="item.auditStatus==1">发布成功</view>
														<view class="right" v-if="item.auditStatus==0">发布失败</view> -->
									</view>
									<view class="item" @click="detail(index,i)">
										<view class="content">
											<view class="subject u-line-2">{{ item.subject }}</view>
											<view class="content">{{ item.content }}</view>
											<view class="location-time">{{ item.location }}</view>
										</view>
									</view>
									<view class="total">
										<!-- 折扣:<text
															style="font-weight: bold;font-size: 34rpx; color: crimson;margin-right: 10rpx;">{{item.discount}}</text>
				-->
										酬劳：
										<text class="total-price">
											<!-- 										￥{{ priceInt(totalPrice(res.goodsList)) }}. -->
											<text class="decimal">{{ item.price }}</text>
										</text>
									</view>
									<view class="bottom">
										<view class="more"><u-icon name="more-dot-fill"
												color="rgb(203,203,203)"></u-icon>
										</view>
										<view class="logistics btn" @click="favorite(index,i)">收藏</view>
										<view class="exchange btn" @click="detail(index,i)"
											style="background-color: #ff7900;color: white;">我感兴趣</view>
										<!-- <view class="evaluate btn">评价</view> -->
									</view>
				
								</view>
				
							</view>
							<!-- <u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore> -->
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<u-popup mode="top" v-model="show" height="93%">
			<view class="content">
				<view>
					<scroll-view scroll-y="true" style="height: 1000rpx;">
						<u-cell-group title="商品详情">
							<view class="popup-group-view">
								{{detailData.subject}}
							</view>
							<view class="popup-group-view"
								style="display: flex;align-items: center;justify-content: center;height: auto;line-height: normal;">
								{{detailData.content}}

							</view>
							
							<view class="popup-group-view">
								酬劳:<text style="color:red;font-size: 34rpx; ">{{detailData.price}}</text>
							</view>
						</u-cell-group>
						<u-cell-group title="其他">
							<view class="popup-group-view" style="font-weight: 300;">
								发布时间：{{detailData.time}}
							</view>
							<view class="popup-group-view" style="font-weight: 300;">
								发布账号：{{detailData.account}}
							</view>
							<view class="popup-group-view" style="font-weight: 300;" v-if="phone!=''">
								联系电话：{{phone}}
							</view>
						</u-cell-group>
						<button style="width: 200rpx;margin-top: 20rpx;background-color: #ff7900;color: white;"
							@click="buy" v-if="detailData.status==0">我感兴趣</button>
						<button style="width: 300rpx;margin-top: 20rpx;background-color: #ff7900;color: white;"
							@click="view" v-if="detailData.status==1">查看联系方式</button>
						<view class="confrim-btn" style="margin: auto;width: 160rpx;margin-top: 40rpx;">
							<u-icon name="close" size="36" @click="show = false;"></u-icon>
						</view>
					</scroll-view>
				</view>

			</view>
		</u-popup>

	</view>
</template>

<script>
	// 引入request模块 
	import request from '@/utils/request.js'
	import {
		vShow
	} from "vue";

	export default {
		data() {
			return {
				show: false,
				keyword: '',
				// 订单列表，包含四个不同状态的订单 
				orderList: [],
				// 表单数据 
				form: [],
				// 数据列表 
				dataList: [],
				// 标签页列表 
				list: [{
					name: '求助'
				}, {
					name: '跑腿'
				}, {
					name: '兼职'
				}, {
					name: '其他'
				}],
				// 当前标签页索引 
				current: 0,
				// 当前轮播图索引 
				swiperCurrent: 0,
				// 标签栏高度 
				tabsHeight: 0,
				// 滑动距离 
				dx: 0,
				// 加载状态，分别对应四种订单状态 
				loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],
				id: '',
				detailData: {},
				phone: '',
				fav: {}
			};
		},
		mounted() {
			this.change(0)
			// 获取本地缓存中的用户token，并发送请求获取数据 
			// this.getMySale()
			// this.getOrderList(0)
		},
		methods: {
			buy() {
				this.detailData.buyer = uni.getStorageSync("token").account
				this.detailData.status = 1
				request.post("assistance/update", this.detailData).then(res => {
					if (res.code == '0') {
						uni.showToast({
							title: "操作成功"
						})
						this.change(this.swiperCurrent)
					}
				})

			},
			view() {
				request.post("student/phone", {
					"account": this.detailData.account
				}).then(res => {
					if (res.code == '0') {
						this.phone = res.data.phone
					}
				})
			},
			detail(index, i) {
				this.show = true
				this.detailData = this.orderList[this.swiperCurrent][index].goodsList[i]
			},
			search() {
				console.log(this.keyword);
				request.post("assistance/search", {
					"s": this.keyword,
					"c": this.list[this.swiperCurrent].name
				}).then(res => {
					// 判断返回数据的code值是否为0 
					if (res.code == '0') {
						// 将获取到的表单数据赋给form数组，并对每个表单进行处理 
						this.dataList = []
						this.orderList[this.swiperCurrent] = []
						this.form = res.data
						for (var i = 0; i < this.form.length; i++) {
							// 添加快递信息 
							this.form[i].discount = (Number(this.form[i].price) / Number(this.form[i]
									.originalPrice))
								.toFixed(2)
							// 添加商品图片地址 
							this.form[i].goodsUrl =
								'//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg' // 添加折扣信息 this.form[i].discount=(Number(this.form[i].price)/Number(this.form[i].originalPrice)).toFixed(2) 
							// 将每个表单放入一个包含该表单的数组中，并添加到数据列表中 
							this.dataList.push({
								"goodsList": new Array(this.form[i])
							})
						}
						this.getOrderList(this.swiperCurrent)

					}
				})

			},
			getList(index) {
				// var path=['dz','sh','sp','fz','yd','qt']
				const user = uni.getStorageSync("token")
				// var s=path[index]
				// console.log(this.list[index]);
				request.post("assistance/classification", {
					"c": this.list[index].name
				}).then(res => {
					// 判断返回数据的code值是否为0 
					if (res.code == '0') {
						// 将获取到的表单数据赋给form数组，并对每个表单进行处理 
						this.form = res.data
						for (var i = 0; i < this.form.length; i++) {
							// 添加快递信息 
							this.form[i].discount = (Number(this.form[i].price) / Number(this.form[i]
									.originalPrice))
								.toFixed(2)

							// 添加商品图片地址 
							this.form[i].goodsUrl =
								'//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg' // 添加折扣信息 this.form[i].discount=(Number(this.form[i].price)/Number(this.form[i].originalPrice)).toFixed(2) 
							// 将每个表单放入一个包含该表单的数组中，并添加到数据列表中 
							this.dataList.push({
								"goodsList": new Array(this.form[i])
							})
						}
						this.getOrderList(index)
					}
				})

			},
			// 当滚动到页面底部时触发的方法 
			reachBottom() {
				uni.showToast({
					title: "到底了"
				})
			},
			// 获取订单列表数据 
			getOrderList(idx) {
				for (let i = 0; i < this.dataList.length; i++) {
					// let index = this.$u.random(0, this.dataList.length - 1);
					let data = JSON.parse(JSON.stringify(this.dataList[i]));
					// data.id = this.$u.guid();
					this.orderList[idx].push(data);
				}
				// 将对应状态的加载状态设置为"loadmore" 
				this.loadStatus.splice(this.current, 1, "loadmore")
			},
			// 切换标签页时触发的方法 
			change(index) {
				this.swiperCurrent = index;
				this.dataList = []
				this.orderList[index] = []
				this.getList(index)
				this.getOrderList(index);
			},
			// 滑动轮播图时触发的方法，用于设置滑动距离 
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			// 轮播图滑动结束时触发的方法，用于设置当前轮播图索引和对应标签页索引 
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			Delete(id) {
				console.log(id);
			},
			add() {
				console.log("增加");
				uni.navigateTo({
					url: "/pages/assistance/assistanceAdd"
				})
			}
		}
	};
</script>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>

<style lang="scss" scoped>

	.search-bar {
		display: flex;
		align-items: center;
	}

	.search-box {
		margin-right: 10px;
	}

	.order {
		
		width: 710rpx;
		background-color: #ffffff;
		margin: 20rpx auto;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 28rpx;

		.top {
			display: flex;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;

				.time {
					margin: 0 10rpx;
					font-size: 28rpx;
					font-weight: bold;
				}
			}

			.right {
				color: $u-type-warning-dark;
			}
		}

		.item {
			display: flex;
			margin: auto;
			justify-content: center; 
			.left {
				margin-right: 20rpx;

				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}
			}

			.content {
				.subject {
					font-size: 28rpx;
					line-height: 50rpx;
				}

				.content {
					margin: 10rpx 0;
					font-size: 24rpx;
					color: $u-tips-color;
				}

				.location-time {
					color: #e5d001;
					font-size: 24rpx;
				}
			}

			.right {
				margin-left: 10rpx;
				padding-top: 20rpx;
				text-align: right;
				float: right;

				.decimal {
					font-size: 24rpx;
					margin-top: 4rpx;
				}

				.number {
					color: $u-tips-color;
					font-size: 24rpx;
				}
			}
		}

		.total {
			margin-top: 20rpx;
			text-align: right;
			font-size: 24rpx;

			.total-price {
				font-size: 32rpx;
			}
		}

		.bottom {
			display: flex;
			margin-top: 40rpx;
			padding: 0 10rpx;
			justify-content: space-between;
			align-items: center;

			.btn {
				line-height: 52rpx;
				width: 160rpx;
				border-radius: 26rpx;
				border: 2rpx solid $u-border-color;
				font-size: 26rpx;
				text-align: center;
				color: $u-type-info-dark;
			}

			.evaluate {
				color: $u-type-warning-dark;
				border-color: $u-type-warning-dark;
			}
		}
	}

	.centre {
		text-align: center;
		margin: 200rpx auto;
		font-size: 32rpx;

		image {
			width: 164rpx;
			height: 164rpx;
			border-radius: 50%;
			margin-bottom: 20rpx;
		}

		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}

		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
		}
	}

	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}

	.price {
		float: right;
	}

	.content {
		padding: 24rpx;
		text-align: center;
	}

	.popup-group-view {
		text-align: center;
		font-weight: bold;
		color: black;
		border-bottom: 1px #f4f6f8 solid;
		height: 40px;
		line-height: 40px;
	}
</style>