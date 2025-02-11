<template>
	<view class="wrap">
		<view class="comment">
			<view class="top">
				<view class="left">
					<view class="heart-photo">
						<image :src="comment.url" mode=""></image>
					</view>
					<view class="user-info">
						<view class="username">{{ comment.username }}</view>
						<view class="time">06-25 13:58</view>
					</view>
				</view>
				<view class="right" :class="{ highlight: comment.isLike }">
					{{ comment.likeNum }}
					<u-icon v-if="!comment.isLike" username="thumb-up" class="like" color="#9a9a9a" :size="30"
						@click="getLike"></u-icon>
					<u-icon v-if="comment.isLike" username="thumb-up-fill" class="like" :size="30"
						@click="getLike"></u-icon>
				</view>
			</view>
			<view class="content">{{ comment.subject }}</view>
		</view>
		<view class="all-reply">
			<!-- <view class="all-reply-top">全部回复（{{ comment.allReply }}）</view> -->
			<view class="item" v-for="(item, index) in commentList" :key="index">
				<view class="comment">
					<view class="top">
						<view class="left">
							<view class="heart-photo">
								<image :src="item.url" mode=""></image>
							</view>
							<view class="user-info">
								<view class="username">{{ item.username }}</view>
								<view class="time">{{ item.time }}</view>
							</view>
						</view>
						<!-- <view class="right"  :class="{ highlight: item.isLike }">
							<view class="num">{{ item.likeNum }}</view>
							<u-icon v-if="!item.isLike" username="thumb-up" class="like" :size="30" color="#9a9a9a" @click="getLike(index)"></u-icon>
							<u-icon v-if="item.isLike" username="thumb-up-fill" class="like" :size="30" @click="getLike(index)"></u-icon>
						</view> -->
					</view>
					<!-- <view class="reply" v-if="item.reply">
						<view class="userusername">{{ item.reply.username }}</view>
						<view class="text">{{ item.reply.contentStr }}</view>
					</view> -->
					<view class="content">{{ item.content }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import colorGradient from '../../uni_modules/vk-uview-ui/libs/function/colorGradient';
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				commentList: [],
				commentL: [],
				comment: '',
				c: [],
				l: 0
			};
		},
		onLoad() {
			this.getReply();
		},
		methods: {
			// 点赞
			getLike(index) {
				if (index === 0 || index > 0) {
					this.commentList[index].isLike = !this.commentList[index].isLike;
					if (this.commentList[index].isLike == true) {
						this.commentList[index].likeNum++;
					} else {
						this.commentList[index].likeNum--;
					}
				} else {
					if (this.comment.isLike == true) {
						this.comment.isLike = !this.comment.isLike;
						this.comment.likeNum--;
					} else {
						this.comment.isLike = !this.comment.isLike;
						this.comment.likeNum++;
					}
				}
			},

			// 回复列表
			getReply() {
			  this.comment = uni.getStorageSync("comment");
			  request.post("reply/list", {"id": this.comment.id}).then(res => {
			    this.commentList = res.data;
			
			    // 使用Promise.all()方法等待所有异步请求结束
			    Promise.all(this.commentList.map(comment => {
			      return request.post("student/phone", {"account": comment.account}).then(res => {
			        this.$set(comment, "url", res.data.url);
			      }).catch(err => {
			        console.error(err);
			      });
			    })).then(() => {
			      // 所有异步请求都已完成
			      console.log("All requests are done!");
			    }).catch(err => {
			      console.error(err);
			    });
			  }).catch(err => {
			    console.error(err);
			  });
			}
		}
	};
</script>

<style lang="scss" scoped>
	page {
		background-color: #f2f2f2;
	}

	.comment {
		padding: 30rpx;
		font-size: 32rpx;
		background-color: #ffffff;

		.top {
			display: flex;
			justify-content: space-between;
		}

		.left {
			display: flex;

			.heart-photo {
				image {
					width: 64rpx;
					height: 64rpx;
					border-radius: 50%;
					background-color: #f2f2f2;
				}
			}

			.user-info {
				margin-left: 10rpx;

				.username {
					color: #5677fc;
					font-size: 28rpx;
					margin-bottom: 4rpx;
				}

				.time {
					font-size: 20rpx;
					color: $u-light-color;
				}
			}
		}

		.right {
			display: flex;
			font-size: 20rpx;
			align-items: center;
			color: #9a9a9a;

			.like {
				margin-left: 6rpx;
			}

			.num {
				font-size: 26rpx;
				color: #9a9a9a;
			}
		}

		.highlight {
			color: #5677fc;

			.num {
				color: #5677fc;
			}
		}
	}

	.all-reply {
		margin-top: 10rpx;
		padding-top: 20rpx;
		background-color: #ffffff;

		.all-reply-top {
			margin-left: 20rpx;
			padding-left: 20rpx;
			border-left: solid 4rpx #5677fc;
			font-size: 30rpx;
			font-weight: bold;
		}

		.item {
			border-bottom: solid 2rpx $u-border-color;
		}

		.reply {
			padding: 20rpx;
			background-color: rgb(242, 242, 242);
			border-radius: 12rpx;
			margin: 10rpx 0;

			.userusername {
				font-size: 24rpx;
				color: #7a7a7a;
			}
		}
	}
</style>