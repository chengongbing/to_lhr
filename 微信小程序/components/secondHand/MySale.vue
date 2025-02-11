<template>
	<view class="page-box">
		<view class="order" v-for="(res, index) in orderList[0]" :key="res.id">
			aaa
			<!-- <view class="top" v-for="(item, i) in res.goodsList" :key="i">
				<view class="left">
					<u-icon name="hourglass-half-fill" :size="30" color="rgb(94,94,94)"></u-icon>
					<view class="createdAt">时间：{{ item.createdAt }}</view>
	
				</view>
				<view class="right" v-if="item.auditStatus==1">发布成功</view>
				<view class="right" v-if="item.auditStatus==0">发布失败</view>
			</view> -->
	
	
			<!-- <view class="item" v-for="(item, index) in res.goodsList" :key="index">
				<view class="left">
					<image :src="item.goodsUrl" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="itemName u-line-2">{{ item.itemName }}</view>
					<view class="description">{{ item.description }}</view>
					<view class="delivery-time">{{ item.delivery }}</view>
				</view>
				<view class="right">
					<view class="price">
						原价：￥{{item.originalPrice }}
	
					</view>
					<view class="number">x{{ item.quantity }}</view>
				</view>
			</view> -->
			<!-- <view class="total" v-for="(item, i) in res.goodsList" :key="i">
				折扣:<text
					style="font-weight: bold;font-size: 34rpx; color: crimson;margin-right: 10rpx;">{{item.discount}}</text>
	
				实付:
				<text class="total-price">
					<text class="decimal">{{ item.price }}</text>
				</text>
			</view> -->
			<!-- <view class="bottom">
				<view class="more"><u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon>
				</view>
				<view class="logistics btn" @click="Edit">编辑</view>
				<view class="exchange btn" @click="Delete">删除</view>
			</view> -->
		</view>
	</view>

</template>

<script>
	// 引入request模块 
	import request from '@/utils/request.js'

	export default {
		data() {
			return {
				// 订单列表，包含四个不同状态的订单 
				orderList: [
					[],
					[],
					[],
					[]
				],
				// 表单数据 
				form: [],
				// 数据列表 
				dataList: [],
				// 标签页列表 
				list: [{
					name: '我的出售'
				}, {
					name: '已售出'
				}, {
					name: '已购买'
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
			};
		},
		mounted() {
			this.change(0)
			// 获取本地缓存中的用户token，并发送请求获取数据 
			const user = uni.getStorageSync("token")
			request.post("secondHand/select", user).then(res => {
				// 判断返回数据的code值是否为0 
				if (res.code == '0') {
					// 将获取到的表单数据赋给form数组，并对每个表单进行处理 
					this.form = res.data
					for (var i = 0; i < this.form.length; i++) {
						// 添加快递信息 
						this.form[i].discount = (Number(this.form[i].price) / Number(this.form[i].originalPrice))
							.toFixed(2)
						this.form[i].delivery = "不满意包退货"
						// 添加商品图片地址 
						this.form[i].goodsUrl =
							'//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg' // 添加折扣信息 this.form[i].discount=(Number(this.form[i].price)/Number(this.form[i].originalPrice)).toFixed(2) 
						// 将每个表单放入一个包含该表单的数组中，并添加到数据列表中 
						this.dataList.push({
							"goodsList": new Array(this.form[i])
						})
					}
					console.log(this.dataList[1]);
				}
			})
		},
		methods: {
			// 当滚动到页面底部时触发的方法 
			reachBottom() {
				uni.showToast({
					title: "到底了"
				})
			},
			// 获取订单列表数据 
			getOrderList(idx) {
				for (let i = 0; i < this.dataList.length; i++) {
					let index = this.$u.random(0, this.dataList.length - 1);
					let data = JSON.parse(JSON.stringify(this.dataList[index]));
					data.id = this.$u.guid();
					this.orderList[idx].push(data);
				}
				// 将对应状态的加载状态设置为"loadmore" 
				this.loadStatus.splice(this.current, 1, "loadmore")
			},
			// 切换标签页时触发的方法 
			change(index) {
				this.swiperCurrent = index;
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

				.createdAt {
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
			margin: 20rpx 0 0;

			.left {
				margin-right: 20rpx;

				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}
			}

			.content {
				.itemName {
					font-size: 28rpx;
					line-height: 50rpx;
				}

				.description {
					margin: 10rpx 0;
					font-size: 24rpx;
					color: $u-tips-color;
				}

				.delivery-time {
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
</style>