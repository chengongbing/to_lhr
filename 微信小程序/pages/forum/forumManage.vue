<template>
	<view>
		<view class="comment" v-for="(res, index) in commentList" :key="res.id">
			<view class="left">
				<image :src="res.url" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view class="name">{{ res.username }}</view>
				</view>
				<view class="content">{{ res.subject }}</view>
				<view class="bottom" v-model="res.time">
					<view class="reply" @click="d(index)">删除</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	import {
		normalizeClass
	} from 'vue';
	export default {

		data() {
			return {
				commentList: [],
				user: {},
				forum: {},
			};
		},
		onLoad() {
			this.user = uni.getStorageSync("token")
			this.getComment();
		},
		methods: {
			getComment() {
			  let account = uni.getStorageSync("token").account; // 获取当前用户账号
			  request.post("forum/list", {"account": account}).then(res => {
			    this.commentList = res.data.records;
			
			    Promise.all(this.commentList.map(comment => {
			      return request.post("student/phone", {"account": comment.account}).then(res => {
			        this.$set(comment, "url", res.data.url);
			      }).catch(err => {
			        console.error(err);
			      });
			    })).then(() => {
			      console.log("All requests are done!");
			    }).catch(err => {
			      console.error(err);
			    });
			  }).catch(err => {
			    console.error(err);
			  });
			},
			d(index){
				request.post("forum/delete",{"id":this.commentList[index].id}).then(res => {
					uni.showToast({
						title:"删除成功",
						icon:'none'
					})
					this.getComment()
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.comment {
		display: flex;
		padding: 30rpx;

		.left {
			image {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				background-color: #f2f2f2;
			}
		}

		.right {
			flex: 1;
			padding-left: 20rpx;
			font-size: 30rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;

				.name {
					color: #5677fc;
				}

				.like {
					display: flex;
					align-items: center;
					color: #9a9a9a;
					font-size: 26rpx;

					.num {
						margin-right: 4rpx;
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

			.content {
				margin-bottom: 10rpx;
			}

			.reply-box {
				background-color: rgb(242, 242, 242);
				border-radius: 12rpx;

				.item {
					padding: 20rpx;
					border-bottom: solid 2rpx $u-border-color;

					.username {
						font-size: 24rpx;
						color: #999999;
					}
				}

				.all-reply {
					padding: 20rpx;
					display: flex;
					color: #5677fc;
					align-items: center;

					.more {
						margin-left: 6rpx;
					}
				}
			}

			.bottom {
				margin-top: 20rpx;
				display: flex;
				font-size: 24rpx;
				color: #9a9a9a;

				.reply {
					color: #5677fc;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>