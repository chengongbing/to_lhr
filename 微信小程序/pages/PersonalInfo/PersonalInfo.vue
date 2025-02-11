<template>
	<view class="personalInfo">
			 <div class="avatar-wrapper">
			    <image :src="form.url" style="width: 120rpx;height: 120rpx;"></image>
			    <u-icon name="edit-pen" color="#ff0000" @click="disa=false"></u-icon>
			  </div>
			<u-upload ref="uUpload" :action="action" :auto-upload="true" @on-success="successUpload" :max-count="1" :disabled="disa"></u-upload>
		<div class="input-wrapper">
			<label>账号：</label>
			<input v-model="form.account" placeholder="请输入账号" disabled></input>
		</div>

		<div class="input-wrapper">
			<label>用户名：</label>
			<input v-model="form.username" placeholder="请输入用户名"></input>
		</div>

		<div class="input-wrapper">
			<label>密码：</label>
			<input v-model="password1" type="password" placeholder="请输入密码"></input>
		</div>

		<div class="input-wrapper">
			<label>确认密码：</label>
			<input v-model="password2" type="password" placeholder="请再次输入密码"></input>
		</div>

		<div class="input-wrapper">
			<label>电话：</label>
			<input v-model="form.phone" placeholder="请输入电话"></input>
		</div>

		<div class="input-wrapper">
			<label>学校：</label>
			<input v-model="form.school" placeholder="请输入学校" disabled></input>
		</div>

		<div class="input-wrapper">
			<label>学号：</label>
			<input v-model="form.number" placeholder="请输入学号" disabled></input>
		</div>
		<view class="button">
			<u-cell-group>
				<u-button type="primary" @click="submit" width="40rpx">提交</u-button>
			</u-cell-group>
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
					status: '0'
				},
				uploadUrl: '',
				action: "http://localhost:9090/files/upload",
				disa:true
			}
		},
		created() {
			// console.log("aaaaaaaaaaaaaaaaaaaaa"+uni.getStorageSync("token"));
			this.form = uni.getStorageSync("token")
			console.log(this.form);
			this.password1 = this.form.password
			this.password2 = this.form.password
		},
		methods: {
			submit() {
				// TODO: 修改逻辑
				request.post("student/update", this.form).then(res => {
					// console.log("this.form:"+this.form.account);
					if (res.code == '0') {
						uni.setStorageSync("token",this.form)
						uni.showToast({
							title: "修改成功",
							icon: 'none'
						});
						// console.log("1111111");
						uni.switchTab({
							url: '/pages/my/my'
						});
						
						
						// console.log(res.data);
					} else {
						uni.showToast({
							title: "修改失败",
							icon: 'error'
						})
					}
				})
			},
			successUpload(data, index, lists, name){
				console.log(data.data);
				this.form.url=data.data
				this.disa=true
				
			}
		}
	}
</script>

<style>
	.personalInfo {
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
		border-radius: 10px;
		outline: none;
		background-color: #007aff;
		color: #fff;
		border: none;
		cursor: pointer;
		height: 100rpx;
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.input-wrapper label {
		margin-right: 10px;
		text-align: right;
		width: 80px;
	}

	.input-wrapper input {
		flex: 1;
		height: 30px;
		border: 1px solid #ccc;
		padding: 5px;
	}

	.input-wrapper input:focus {
		outline: none;
		border-color: #409EFF;
	}

	.button {
		width: 180rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
	}
	.avatar-wrapper {
	  position: relative;
	  display: inline-block;
	  width: 120rpx;
	  height: 120rpx;
	}
	
	.avatar-wrapper u-icon {
	  position: absolute;
	  top: -24rpx;
	  right: -24rpx;
	}
</style>