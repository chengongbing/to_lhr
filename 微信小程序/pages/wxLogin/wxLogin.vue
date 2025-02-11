<template>
	<view class="container">
		<view class="form-group">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="schoolList">
							<view class="uni-input" v-model="selectedSchool1">{{form.school}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="form-group">
				<u-field
							v-model="account1"
							label="账号"
							placeholder="请输入账号"
						></u-field>
				<!-- <input type="text" placeholder="请输入账号" @click="onAccountInput" v-model="account1"/> -->
			</view>
			<view class="form-group">
				<u-field
							v-model="password1"
							label="密码"
							placeholder="请输入密码"
							password="true"
						></u-field>
				<!-- <input type="password" placeholder="请输入密码" @click="onPasswordInput" v-model="password1"/> -->
			</view>
			<view class="btn-login" @click="onLoginClick">登录</view>
			<view class="other-options">
		  <span>没有账号？</span><navigator url="/pages/register/register">去注册</navigator>
		</view>
		</view>
		
	</view>
</template>

<script>
	import request from '@/utils/request.js'
import loginVue from './login.vue';
	export default {
		data() {
			return {
				selectedSchool1:'',
				account1:'',
				password1:'',
				form: {
					school: '请选择学校', // 当前选中的学校
					account: '', // 用户名
					password: '', // 密码
				},

				title: 'picker',
				schoolList: ['清华大学', '北京大学','山东科技大学'],
				index: 0,
				rules: {
					// account:{
					// 	rule:/^[a-zA-Z0-9]+$/,
					// 	msg:"账号不能未空"
					// },
					password: {
						rule: /^[a-zA-Z0-9]+$/,
						msg: "密码格式错误"
					},
					selectedSchool: {
						msg: "请选择学校"
					}
				}
			};
		},
		computed: {},
		methods: {
			bindPickerChange: function(e) {
				// console.log('picker发送选择改变，携带值为', e.detail.value)
				this.form.school = this.schoolList[e.detail.value]
			},
			// 学校选择器改变事件
			onSchoolChange(e) {
				const {
					value
				} = e.detail;
				this.form.school = this.schoolList[value];
			},
			// 用户名输入框输入事件
			// onAccountInput() {
			// 	this.form.account = this.account1;
			// },
			// // 密码输入框输入事件
			// onPasswordInput(e) {
			// 	this.form.password = this.password1;
			// },
			
			onLoginClick() {
				this.form.account=this.account1
				this.form.password=this.password1
				if (this.form.school === '请选择学校') {
					uni.showToast({
						title: this.rules['selectedSchool'].msg,
						icon: 'none'
					})
					return
				}
				if (this.form.account === '') {
					uni.showToast({
						title: "账号不能未空",
						icon: 'none'
					})
					return
				}
				if (this.form.password === '') {
					uni.showToast({
						title: "请输入密码",
						icon: 'none'
					})
					return
				}
				uni.showLoading({
					mask: true,
					title: '登录中'
				});
				request.post("student/login", this.form).then(res => {
					// console.log("this.form:"+this.form.account);
					if (res.code == '0') {
						uni.setStorageSync("hasLogin", true);
						uni.setStorageSync("token", res.data);
						console.log(uni.getStorageSync("hasLogin"));
						// console.log(res.data);
						uni.switchTab({
							url: '/pages/my/my'
						});
						// console.log(res.data);
						// sessionStorage.setItem("user",res.data)
						
					}
					else{
						uni.showToast({
							title: "账号或密码错误",
							icon: 'error'
						})
					}
				})
				uni.hideLoading();

			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		display: flex;
		justify-content: center;
		/* align-items: center; */
		margin-top: 20%;
		height: 100%;
	}

	.form-group {
		margin-bottom: 20px;
		text-align: center;
	}
.other-options {
  margin-top: 20px;
  font-size: 14px;
}

.other-options span {
  color: #333;
}
	.select-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		background-color: #f5f5f5;
		border-radius: 5px;
		color: #333;
	}

	.iconfont {
		font-size: 14px;
		margin-left: 5px;
	}

	.btn-login {
		display: block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #007aff;
		color: #fff;
		border-radius: 5px;
	}
</style>