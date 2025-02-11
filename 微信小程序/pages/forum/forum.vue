<!-- <template>
	<view>
		<view style="margin: auto;display: flex;line-height: 100%;margin-left: 100rpx;">
			<u-field v-model="keyword" placeholder="请输入搜索内容">
			</u-field>
			<u-button type="primary" plain="" shape="circle" @click="showAdd=true">增加</u-button>
		</view>
		<view class="comment" v-for="(res, index) in commentList" :key="res.id">
			<view class="left">
				<image :src="res.url" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view class="name">{{ res.username }}</view>
					<view class="like" :class="{ highlight: res.isLike }">
						<view class="num">{{ res.likeNum }}</view>
						<u-icon v-if="!res.isLike" name="thumb-up" :size="30" color="#9a9a9a"
							@click="getLike(index)"></u-icon>
						<u-icon v-if="res.isLike" name="thumb-up-fill" :size="30" @click="getLike(index)"></u-icon>
					</view>
				</view>
				<view class="content">{{ res.subject }}</view>
				<view class="reply-box">
					<view class="all-reply" @tap="toAllReply(index)" v-if="res.allReply != 0">
						共{{commentList[index].allReply}}条回复
						<u-icon class="more" name="arrow-right" :size="26"></u-icon>
					</view>
				</view>
				<view class="bottom" v-model="res.time">
					<view class="reply" @click="Reply(index)">回复</view>
				</view>
			</view>

		</view>
		<u-popup v-model="show" height="20%" mode="bottom" length="20%">
			<u-field v-model="replyContent" label="回复:" placeholder="请输入内容" type="textarea"></u-field>
			<view style="margin: auto; display: flex; justify-content: center;">
				<u-button size="medium" type="primary" plain @click="replySubmit">提交</u-button>
			</view>
		</u-popup>
		<u-popup v-model="showAdd" height="40%" mode="bottom" length="20%">
			<u-field v-model="addData.subject" label="主题" placeholder="请填写主题"></u-field>
			<u-field v-model="addData.content" label="内容:" placeholder="请输入内容" type="textarea"></u-field>
			<view style="margin: auto; display: flex; justify-content: center;">
				<u-button size="medium" type="primary" plain @click="addSubmit">提交</u-button>
			</view>
		</u-popup>
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
				show: false,
				replyData: {},
				replyContent: "",
				keyword: "",
				showAdd: false,
				addData: {}
			};
		},
		onLoad() {
			this.user = uni.getStorageSync("token")
			this.getComment();
		},
		methods: {
			addSubmit() {
				this.addData.account = this.user.account
				this.addData.username = this.user.username
				request.post("forum/add", this.addData).then(res => {
					uni.showToast({
						title: "发布成功",
						icon: 'none'
					})
					this.sleep(1000)
					this.getComment();
					this.showAdd = false
				})
			},
			// 跳转到全部回复
			toAllReply(index) {
				uni.setStorageSync("comment", this.commentList[index])
				uni.navigateTo({
					url: '/pages/forum/reply'
				});
			},
			IsLike(index) {
				request.post("likes/search", {
						"u": this.user.account,
						"p": this.commentList[index].id
					})
					.then(res => {
						if (res.data == 0)
							this.commentList[index].isLike = false;
						else
							this.commentList[index].isLike = true;
					})
				request.post("likes/allLikes", {
						"p": this.commentList[index].id
					})
					.then(res => {
						this.commentList[index].likeNum = res.data.length;
					})
			},
			// 点赞
			getLike(index) {
				this.commentList[index].isLike = !this.commentList[index].isLike;
				if (this.commentList[index].isLike == true) {
					request.post("likes/insert", {
							"userAccount": this.user.account,
							"postId": this.commentList[index].id
						})
						.then(res => {
							this.commentList[index].likeNum++;
							this.commentList[index].isLike = true;
						})
				} else {
					request.post("likes/delete", {
							"u": this.user.account,
							"p": this.commentList[index].id
						})
						.then(res => {
							this.commentList[index].likeNum--;
							this.commentList[index].isLike = false;
						})
				}
			},
			getallReply() {
			  const promises = [];
			  for (let i = 0; i < this.commentList.length; i++) {
			    const promise = request.post("reply/list", {
			      "id": this.commentList[i].id
			    }).then(res => {
			      console.log(this.commentList[i]);
			      this.commentList[i].allReply = res.data.length;
			      return request.post("student/phone", {
			        "account": this.commentList[i].account
			      });
			    }).then(res => {
			      // console.log(res.data.url);
			      this.commentList[i].url = res.data.url;
			      this.IsLike(i);
			    });
			    promises.push(promise);
			  }
			  Promise.all(promises).then(() => {
			    console.log("All requests finished");
			  });
			},
			// 评论列表
			getComment() {
				request.post("forum/list").then(res => {
					// console.log(res.data.records);
					// this.commentList = res.data.records
					this.commentList = res.data.records.map(item => ({
					  ...item,
					  allReply: 0 // 初始化 allReply，避免 undefined
					}));
					this.forum = res.data.records
					this.getallReply()
					this.getLike()

				})
			},

			Reply(index) {
				this.show = true
				this.replyData.account = uni.getStorageSync("token").account
				this.replyData.username = this.user.username
				this.replyData.postId = this.commentList[index].id
			},
			replySubmit() {
				this.replyData.content = this.replyContent
				request.post("reply/add", this.replyData).then(res => {
					uni.showToast({
						title: "回复成功",
						icon: 'none'
					})
					this.getComment();
					this.show = false
				})
			}
		}
	};
</script> -->
<template>
	<view>
		<view style="margin: auto;display: flex;line-height: 100%;margin-left: 100rpx;">
			<u-field v-model="keyword" placeholder="请输入搜索内容">
			</u-field>
			<u-button type="primary" plain="" shape="circle" @click="showAdd=true">增加</u-button>
		</view>
		<view class="comment" v-for="(res, index) in commentList" :key="res.id">
			<view class="left">
				<image :src="res.url" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view class="name">{{ res.username }}</view>
					<view class="like" :class="{ highlight: res.isLike }">
						<view class="num">{{ res.likeNum }}</view>
						<u-icon v-if="!res.isLike" name="thumb-up" :size="30" color="#9a9a9a"
							@click="getLike(index)"></u-icon>
						<u-icon v-if="res.isLike" name="thumb-up-fill" :size="30" @click="getLike(index)"></u-icon>
					</view>
				</view>
				<view class="content">{{ res.subject }}</view>
				<view class="reply-box">
					<view class="all-reply" @tap="toAllReply(index)" v-if="res.allReply != 0">
						共{{commentList[index].allReply}}条回复
						<u-icon class="more" name="arrow-right" :size="26"></u-icon>
					</view>
				</view>
				<view class="bottom" v-model="res.time">
					<view class="reply" @click="Reply(index)">回复</view>
				</view>
			</view>
		</view>

		<!-- 回复弹窗 -->
		<u-popup v-model="show" height="20%" mode="bottom" length="20%">
			<u-field v-model="replyContent" label="回复:" placeholder="请输入内容" type="textarea"></u-field>
			<view style="margin: auto; display: flex; justify-content: center;">
				<u-button size="medium" type="primary" plain @click="replySubmit">提交</u-button>
			</view>
		</u-popup>

		<!-- 发布弹窗 -->
		<u-popup v-model="showAdd" height="40%" mode="bottom" length="20%">
			<u-field v-model="addData.subject" label="主题" placeholder="请填写主题"></u-field>
			<u-field v-model="addData.content" label="内容:" placeholder="请输入内容" type="textarea"></u-field>
			<view style="margin: auto; display: flex; justify-content: center;">
				<u-button size="medium" type="primary" plain @click="addSubmit">提交</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	export default {
		data() {
			return {
				commentList: [],  // 评论列表
				user: {},         // 用户信息
				forum: {},        // 论坛数据
				show: false,      // 回复弹窗显示控制
				replyData: {},    // 回复数据
				replyContent: "", // 回复内容
				keyword: "",      // 搜索关键字
				showAdd: false,   // 发布弹窗显示控制
				addData: {}       // 发布数据
			};
		},
		onLoad() {
			this.user = uni.getStorageSync("token");  // 获取用户信息
			this.getComment();  // 加载评论数据
		},
		methods: {
			// 提交发布的评论
			addSubmit() {
				this.addData.account = this.user.account;
				this.addData.username = this.user.username;
				request.post("forum/add", this.addData).then(res => {
					uni.showToast({
						title: "发布成功",
						icon: 'none'
					});
					this.sleep(1000);
					this.getComment();
					this.showAdd = false;
				});
			},

			// 跳转到全部回复页面
			toAllReply(index) {
				uni.setStorageSync("comment", this.commentList[index]);
				uni.navigateTo({
					url: '/pages/forum/reply'
				});
			},

			// 判断是否点赞
			IsLike(index) {
				request.post("likes/search", {
					"u": this.user.account,
					"p": this.commentList[index].id
				}).then(res => {
					this.commentList[index].isLike = res.data !== 0;
				});
				request.post("likes/allLikes", {
					"p": this.commentList[index].id
				}).then(res => {
					this.commentList[index].likeNum = res.data.length;
				});
			},

			// 点赞和取消点赞
			async getLike(index) {
				const comment = this.commentList[index];
				comment.isLike = !comment.isLike;

				if (comment.isLike) {
					// 点赞
					await request.post("likes/insert", {
						userAccount: this.user.account,
						postId: comment.id,
					});
					comment.likeNum++;
				} else {
					// 取消点赞
					await request.post("likes/delete", {
						u: this.user.account,
						p: comment.id,
					});
					comment.likeNum--;
				}

				// 强制更新 UI
				this.$set(this.commentList, index, comment);
			},

			// 获取评论的所有回复数量
			getallReply() {
				const promises = [];
				for (let i = 0; i < this.commentList.length; i++) {
					const promise = request.post("reply/list", {
						"id": this.commentList[i].id
					}).then(res => {
						this.commentList[i].allReply = res.data.length || 0;
						return request.post("student/phone", {
							"account": this.commentList[i].account
						});
					}).then(res => {
						this.commentList[i].url = res.data.url || '';
						this.IsLike(i);  // 加载点赞信息
					});
					promises.push(promise);
				}
				Promise.all(promises).then(() => {
					console.log("所有请求已完成");
				});
			},

			// 获取评论列表
			getComment() {
				request.post("forum/list").then(res => {
					this.commentList = res.data.records.map(item => ({
						...item,
						allReply: 0, // 初始化 allReply，避免 undefined
						isLike: false, // 初始化点赞状态
						likeNum: 0,    // 初始化点赞数
					}));
					this.forum = res.data.records;
					this.getallReply(); // 加载所有回复数量
					this.getLike(); // 加载所有评论的点赞状态
				});
			},

			// 回复某条评论
			Reply(index) {
				this.show = true;
				this.replyData.account = uni.getStorageSync("token").account;
				this.replyData.username = this.user.username;
				this.replyData.postId = this.commentList[index].id;
			},

			// 提交回复
			replySubmit() {
				this.replyData.content = this.replyContent;
				request.post("reply/add", this.replyData).then(res => {
					uni.showToast({
						title: "回复成功",
						icon: 'none'
					});
					this.getComment();
					this.show = false;
				});
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