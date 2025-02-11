<template>
  <el-menu
      style="width:250px;min-height: calc(100vh - 50px)"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      v-model:default-active="activeMenu"
  >
    <el-menu-item index="notifications" v-if="user.role==1">
      <el-icon><ChatDotRound /></el-icon>
      <span>{{ $t('notice') }}</span>
    </el-menu-item>
    <el-sub-menu index="1" v-if="user.role==0">
      <template #title>
        <el-icon>
          <Location/>
        </el-icon>
        <span>{{ $t('campusAssistance') }}</span>
      </template>
      <el-menu-item index="assistance">{{ $t('pendingReview') }}</el-menu-item>
      <el-menu-item index="assistance_yes">{{ $t('approved') }}</el-menu-item>
      <el-menu-item index="assistance_no">{{ $t('rejected') }}</el-menu-item>
<!--      <el-menu-item index="1-4">历史审核</el-menu-item>-->
    </el-sub-menu>
    <el-sub-menu index="2" v-if="user.role==0">
      <template #title>
        <el-icon>
<!--          <Location/>-->
          <Document/>
        </el-icon>
        <span>{{ $t('secondHandTrading') }}</span>
      </template>
      <el-menu-item index="secondhand">{{ $t('pendingReview') }}</el-menu-item>
      <el-menu-item index="secondhand_yes">{{ $t('approved') }}</el-menu-item>
      <el-menu-item index="secondhand_no">{{ $t('rejected') }}</el-menu-item>
<!--      <el-menu-item index="2-4" v-if="user.role==0">历史审核</el-menu-item>-->
    </el-sub-menu>

    <el-menu-item index="auditors" v-if="user.role==1">
      <el-icon><Document /></el-icon>
      <span>{{ $t('auditorManagement') }}</span>
    </el-menu-item>
    <el-sub-menu index="3" v-if="user.role==0">
      <template #title>
        <el-icon>
          <Location/>
        </el-icon>
        <span>{{ $t('userReview') }}</span>
      </template>
      <el-menu-item index="student">{{ $t('pendingReview') }}</el-menu-item>
      <el-menu-item index="student_yes">{{ $t('approved') }}</el-menu-item>
      <el-menu-item index="student_no">{{ $t('rejected') }}</el-menu-item>
    </el-sub-menu>


    <el-sub-menu index="4" v-if="user.role==1">
      <template #title>
        <el-icon>
          <Location/>
        </el-icon>
        <span>{{ $t('Statistics') }}</span>
      </template>
      <el-menu-item index="secondhand_statistics">{{ $t('secondHandTrading') }}</el-menu-item>
      <el-menu-item index="assistance_statistics">{{ $t('campusAssistance') }}</el-menu-item>
      <!--      <el-menu-item index="1-4">历史审核</el-menu-item>-->
    </el-sub-menu>
  </el-menu>
</template>

<script>
import {Document, Location, ChatDotRound} from "@element-plus/icons-vue";
import request from "@/utils/request";
export default {
  name: "Aside",
  components: {
    Location,
    Document,
    ChatDotRound
  },
  data(){
    return {
      user:{role: 1,},
      path:this.$router.path,
      activeMenu: 'assistance',
    }
  },
  mounted() {
    if(this.user.role==1){
      this.activeMenu="notifications"
    }
  },
  created(){
    let userStr=sessionStorage.getItem("user")||"{}"
    this.user=JSON.parse(userStr)
    request.get("/auditors/"+this.user.id).then(res => {
      if(res.code=="0")
      {
        this.user=res.data
      }
    })
  }
}
</script>

<style scoped>

</style>