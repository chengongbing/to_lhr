<template>
	<view class="register">
		<u-upload ref="uUpload" :action="action" :auto-upload="true" @on-success="successUpload" max-count="1"></u-upload>
		<input v-model="form.account" placeholder="请输入账号"></input>
		<input v-model="form.username" placeholder="请输入用户名"></input>
		<input v-model="password1" type="password" placeholder="请输入密码"></input>
		<input v-model="password2" type="password" placeholder="请再次输入密码" @blur="check"></input>
		<input v-model="form.phone" placeholder="请输入电话"></input>
		<input v-model="form.school" placeholder="请输入学校"></input>
		<input v-model="form.number" placeholder="请输入学号"></input>
		<button @click="onRegister">注册</button>
		<view class="other-options">
			<span>已有账号？</span>
			<navigator url="/pages/login/login">去登录</navigator>
		</view>
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	export default {
		data() {
			return {
				password1: '',
				password2: '',
				form: {
					username: '',
					account: '',
					password: '',
					phone: '',
					school: '',
					number: '',
					status: '0',
					url:''
				},
				action: "http://localhost:9090/files/upload",
				url:''
			}
		},
		methods: {
			check() {
				if (this.password1 != this.password2) {
					uni.showToast({
						title: "两次密码不一致",
						icon: 'none'
					})
				} else {
					this.form.password = this.password1
				}
			},
			onRegister() {
				// TODO: 注册逻辑
				this.$refs.uUpload.upload();
				console.log(this.form);
				request.post("student", this.form).then(res => {
					if (res.code == '0') {
						uni.showToast({
							title: "注册成功",
							icon: 'none'
						})
						this.form={}
						this.password1=''
						this.password2=''
						console.log(res.data);
					} else {
						uni.showToast({
							title: "注册失败",
							icon: 'error'
						})
					}
				})
			},
			successUpload(data, index, lists, name){
				console.log(data.data);
				this.form.url=data.data
			}
		}
	}
</script>

<style>
	.register {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin-top: 40rpx;
	}

	input,
	select {
		margin: 10px;
		padding: 10px;
		width: 70%;
		border: 1px solid #ccc;
		border-radius: 5px;
		outline: none;
	}

	button {
		margin: 10px;
		padding: 10px;
		width: 80%;
		border: 1px solid #ccc;
		border-radius: 5px;
		outline: none;
		background-color: #007aff;
		color: #fff;
		border: none;
		cursor: pointer;
		height: 100rpx;
	}

	.other-options {
		margin-top: 20px;
		font-size: 14px;
	}

	.other-options span {
		color: #333;
	}

	.navigator {
		color: #007aff;
	}
</style>