<template>
  <button @click="bindQQ">绑定 QQ 账号</button>
</template>

<script>
export default {
  methods: {
    bindQQ() {
      const appId = "你的QQ_APP_ID";
      const redirectUri = encodeURIComponent("http://localhost:8080/api/qq/callback?type=bind");
      window.location.href = `https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=${appId}&redirect_uri=${redirectUri}&state=bind&scope=get_user_info`;
    },
  },
};
</script>
