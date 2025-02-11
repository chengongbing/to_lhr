<template>
  <button @click="qqLogin">使用 QQ 登录</button>
</template>

<script>
export default {
  methods: {
    qqLogin() {
      const appId = "你的QQ_APP_ID";
      const redirectUri = encodeURIComponent("http://localhost:8080/api/qq/callback?type=login");
      window.location.href = `https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=${appId}&redirect_uri=${redirectUri}&state=login&scope=get_user_info`;
    },
  },
};
</script>
