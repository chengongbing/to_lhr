<template>
	<view class="wrap">
		<view class="top">
			
			<view class="item">
				<view class="left">商品名称</view>
				<input type="text" placeholder-class="line" placeholder="请填写商品名称" v-model="form.itemName" />
			</view>
			<view class="item">
				<view class="left">商品数量</view>
				<input type="text" v-model="form.quantity" placeholder-class="line" placeholder="请填写商品数量和单位" />
			</view>
			<view class="item address">
				<view class="left">详细描述</view>
				<textarea type="text" placeholder-class="line" placeholder="商品详情 新旧程度 交易地点等" v-model="form.description" />
			</view>
			<view class="item">
				<view class="left">原价</view>
				<input type="text" placeholder-class="line" placeholder="请填写商品原价" v-model="form.originalPrice" />
			</view>
			<view class="item">
				<view class="left">售价</view>
				<input type="text" placeholder-class="line" placeholder="请填写商品售价" v-model="form.price" />
			</view>
		</view>
		<view class="bottom">
			<view class="tag">
				<view class="left">分类</view>
				<view class="right">
					<u-tag text="电子产品" :show="true" @click="tagClick(0)" shape="circle" :type="tags[0].tagType" />
					<u-tag text="生活用品" :show="true" @click="tagClick(1)" shape="circle" :type="tags[1].tagType" />
					<u-tag text="食品" :show="true" @click="tagClick(2)" shape="circle" :type="tags[2].tagType" />
					<u-tag text="服饰" :show="true" @click="tagClick(3)" shape="circle" :type="tags[3].tagType" />
					<u-tag text="箱包" :show="true" @click="tagClick(4)" shape="circle" :type="tags[4].tagType" />
					<u-tag text="运动" :show="true" @click="tagClick(5)" shape="circle" :type="tags[5].tagType" />
					<u-tag text="其他" :show="true" @click="tagClick(6)" shape="circle" :type="tags[6].tagType" />
				</view>
			</view>
			<view class="upload-wrapper">
				<text>上传图片</text>
				<u-upload ref="uUpload" :action="action" :auto-upload="true" @on-success="successUpload" max-count="1"></u-upload>
			</view>
			<view class="default">
				<u-button type="primary" plain @click="Submit">提交</u-button>
			</view>
		</view>
		<u-picker mode="region" ref="uPicker" v-model="show" />
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	export default {
		data() {
			return {
				tags: [{
					tagType: "info"
				}, {
					tagType: "info"
				}, {
					tagType: "info"
				}, {
					tagType: "info"
				}, {
					tagType: "info"
				}, {
					tagType: "info"
				}, {
					tagType: "info"
				}],
				show: false,
				action: "http://localhost:9090/files/upload",
				filesArr: [],
				list: [
					'电子产品', '生活用品', '食品', '服饰', '箱包', '运动', '其他'
				],
				form: {},
			};
		},
		computed: {

		},
		methods: {
			tagClick(index) {
				// 遍历所有标签，将它们的tagType属性设置为"circle"
				for (let i = 0; i < this.tags.length; i++) {
					this.tags[i].tagType = "info";
				}
				// 将被点击标签的tagType属性设置为"primary"
				this.tags[index].tagType = "primary";
				this.form.cla = this.list[index]
				
				
				console.log(index);

			},
			Submit() {
				this.$refs.uUpload.upload();

				this.form.account = uni.getStorageSync("token").account
				this.form.status = 0;
				this.form.auditStatus = 0
				console.log(this.form);
				request.post("secondHand/add",this.form).then(res =>{
					if(res.code=='0')
					{
						uni.showToast({
							title:"发布成功，正在审核"
						})
					}
				})
			},
			showRegionPicker() {
				this.show = true;
			},
			successUpload(data, index, lists, name){
				console.log(data.data);
				this.form.cover=data.data
			}
		}
	};
</script>

<style lang="scss" scoped>
	/deep/ .line {
		color: $u-light-color;
		font-size: 28rpx;
	}

	.wrap {
		background-color: #f2f2f2;

		.top {
			background-color: #ffffff;
			border-top: solid 2rpx $u-border-color;
			padding: 22rpx;

			.item {
				display: flex;
				font-size: 32rpx;
				line-height: 100rpx;
				align-items: center;
				border-bottom: solid 2rpx $u-border-color;

				.left {
					width: 180rpx;
				}

				input {
					text-align: left;
				}
			}

			.address {
				padding: 20rpx 0;

				textarea {
					// width: 100%;
					height: 150rpx;
					background-color: #f7f7f7;
					line-height: 60rpx;
					margin: 40rpx auto;
					padding: 20rpx;
				}
			}

			.site-clipboard {
				padding-right: 40rpx;

				textarea {
					// width: 100%;
					height: 150rpx;
					background-color: #f7f7f7;
					line-height: 60rpx;
					margin: 40rpx auto;
					padding: 20rpx;
				}

				.clipboard {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 26rpx;
					color: $u-tips-color;
					height: 80rpx;

					.icon {
						margin-top: 6rpx;
						margin-left: 10rpx;
					}
				}
			}
		}

		.bottom {
			margin-top: 20rpx;
			padding: 40rpx;
			padding-right: 0;
			background-color: #ffffff;
			font-size: 28rpx;

			.tag {
				display: flex;

				.left {
					width: 160rpx;
				}

				.right {
					display: flex;
					flex-wrap: wrap;

					.tags {
						width: 140rpx;
						padding: 16rpx 8rpx;
						border: solid 2rpx $u-border-color;
						text-align: center;
						border-radius: 50rpx;
						margin: 0 10rpx 20rpx;
						display: flex;
						font-size: 28rpx;
						align-items: center;
						justify-content: center;
						color: $u-content-color;
						line-height: 1;
					}

					.plus {
						//padding: 10rpx 0;
					}
				}
			}

			.default {
				margin-top: 60rpx;
				display: flex;
				justify-content: space-between;
				border-top: solid 2rpx $u-border-color;
				line-height: 64rpx;

				.tips {
					font-size: 24rpx;
				}

				.right {}
			}
		}
	}

	.upload-wrapper {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
	}

	.upload-wrapper text {
		margin-right: 20rpx;
	}
</style>