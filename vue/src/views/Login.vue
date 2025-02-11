<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-title">欢迎登录</div>
      <div>
        <el-form :model="form">
          <el-form-item>
            <el-input prefix-icon="Avatar" v-model="form.account" placeholder="请输入用户名" clearable :style="{ backgroundColor: 'rgba(255, 255, 255, 0.7)', opacity: '.8' }"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input prefix-icon="Lock" v-model="form.password" placeholder="请输入密码" show-password clearable :style="{ backgroundColor: 'rgba(255, 255, 255, 0.7)', opacity: '.7' }" />
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" @click="login">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
import {ElForm, ElFormItem, ElInput, ElButton, ElMessage} from 'element-plus';
import {Avatar, Lock} from '@element-plus/icons-vue';
import request from '@/utils/request';

export default {
  name: 'Login',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    Avatar, // 导入 Avatar 图标组件
    Lock,
  },
  data() {
    return {
      form: {},
    };
  },
  setup() {
    return {
      Avatar,
      Lock
    }

  },
  methods: {
    login: function () {
      request.post('auditors/login', this.form).then(res => {
        if (res.code === '0') {
          ElMessage.success('登录成功');
          sessionStorage.clear()
          sessionStorage.setItem("user", JSON.stringify(res.data));
          // console.log(sessionStorage.getItem("user"))
          if (res.data.role == 1)
            this.$router.push('/notifications');
          else
            this.$router.push('/assistance');
        } else {
          ElMessage.error(res.msg);
        }
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/Desert1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
}

.login-box {
  display: flex; /* 设置为 Flex 布局 */
  flex-direction: column; /* 纵向排列 */
  justify-content: center; /* 垂直居中 */
  width: 400px;
  margin: 0 auto; /* 水平居中 */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(89,100,116, 0.4); /* 使用 RGBA 值设置半透明的白色背景 */
}

.login-title {
  color: #333;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px; /* 自适应宽度并居中显示 */
}

.el-input__inner,
.el-button {
  height: 40px;
  font-size: 16px;
  border-radius: 20px;
}

.el-form-item__label {
  color: #666;
}

.login-btn {
  width: 100%;
  background-color: #50afeb;
  border-color: #50afeb;
  color: #fff;
  margin-top: 20px;
}

.login-btn:hover {
  background-color: #4092c2;
  border-color: #4092c2;
}
</style>