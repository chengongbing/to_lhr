<template>
	<view class="wrap">
		<view class="top">
			<view class="item">
				<view class="left">主题</view>
				<input type="text" placeholder-class="line" placeholder="请填写主题" v-model="form.subject" />
			</view>
			<view class="item">
				<view class="left">地点</view>
				<input type="text" v-model="form.location" placeholder-class="line" placeholder="请填写地点" />
			</view>
			<!-- <view class="item" @tap="showRegionPicker">
				<view class="left">所在地区</view>
				<input disabled type="text" placeholder-class="line" placeholder="省市区县、乡镇等" />
			</view> -->
			<view class="item address">
				<view class="left">详细描述</view>
				<textarea type="text" placeholder-class="line" placeholder="信息描述" v-model="form.content" />
			</view>
			<view class="item">
				<view class="left">酬劳</view>
				<input type="text" placeholder-class="line" placeholder="请填写事件酬劳" v-model="form.price" />
			</view>
			<!-- <view class="site-clipboard">
				<textarea placeholder-class="line" value="" placeholder="粘贴文本,可自动识别姓名和地址等" />
				<view class="clipboard">
					地址粘贴板
					<u-icon name="arrow-down" class="icon" :size="20"></u-icon>
				</view>
			</view> -->
		</view>
		<view class="bottom">
			<view class="tag">
				<view class="left">分类</view>
				<view class="right">
					<u-tag text="求助" :show="true" @click="tagClick(0)" shape="circle" :type="tags[0].tagType" />
					<u-tag text="跑腿" :show="true" @click="tagClick(1)" shape="circle" :type="tags[1].tagType" />
					<u-tag text="兼职" :show="true" @click="tagClick(2)" shape="circle" :type="tags[2].tagType" />
					<u-tag text="其他" :show="true" @click="tagClick(3)" shape="circle" :type="tags[3].tagType" />
					<!-- <view class="tags plus"><u-icon size="22" name="plus"></u-icon></view> -->
				</view>
			</view>
			  <view class="default" style="display: flex; justify-content: center;">
			    <u-button type="primary" plain @click="Submit" style="margin-top: 20rpx;">提交</u-button>
			  </view>
		</view>
		<!-- <u-picker mode="region" ref="uPicker" v-model="show" /> -->
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
				}],
				show: false,
				action: "https://example.com/upload",
				list: [
					'求助', '跑腿', '兼职', '其他'
				],
				form: {}
			};
		},
		computed: {

		},
		onLoad() {
			// console.log(data.query);
			this.form=uni.getStorageSync("edit")
			for(var i=0;i<this.list.length;i++)
			{
				if(this.list[i]==this.form.cla)
				{
					this.tags[i].tagType = "primary";
					break
				}
				
			}
			
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
			// handleBeforeUpload(file) {
			// 	// 生成新的文件名，格式为：原始文件名_当前时间戳.扩展名
			// 	// const timestamp = new Date().getTime();
			// 	// const ext = file.name.split(".").pop();
			// 	const newName = `123`;

			// 	// 修改文件名
			// 	file.name = newName;

			// 	// 返回修改后的文件对象
			// 	return file;
			// },
			Submit() {



				this.form.account = uni.getStorageSync("token").account
				this.form.status = 0;
				this.form.auditStatus = 0
				console.log(this.form);
				request.post("assistance/add",this.form).then(res =>{
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
			text-align: center;
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
