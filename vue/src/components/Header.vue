<template>
  <div style="height: 50px;line-height: 50px; border-bottom: 1px solid #ccc;display: flex;">
    <div style="width: 200px; padding-left: 30px;font-weight: bold;color: dodgerblue">{{ $t('adminPanel') }}</div>
    <div style="flex: 1;text-align: center;font-size: 30px;"><b>{{ $t('campusAssistancePlatform') }}</b></div>
    <div style="width: 100px;">
      <el-select v-model="selectedLanguage" @change="switchLanguage" class="language-select">
        <el-option label="English" value="en"/>
        <el-option label="中文" value="zh"/>
      </el-select>
    </div>
    <div style="width: 100px;padding-top: 20px;padding-right: 20px">
      <el-dropdown>
        <span class="el-dropdown-link">{{ user.username }}<el-icon class="el-icon--right"><arrow-down/> </el-icon></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/personalInformation')">{{ $t('personalInformation') }}</el-dropdown-item>
            <el-dropdown-item @click="$router.push('/')">{{ $t('logOut') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
import {ArrowDown} from "@element-plus/icons-vue";

export default {
  name: "Header",
  props: ['user'],
  components: {
    ArrowDown
  },
  data() {
    return {
      user: null,
      selectedLanguage: this.$i18n.locale, // 默认语言
    }
  },
  methods: {
    switchLanguage() {
      this.$i18n.locale = this.selectedLanguage; // 切换语言
    },
  },
  created() {
    this.user = JSON.parse(sessionStorage.getItem("user"))
  }
}
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>