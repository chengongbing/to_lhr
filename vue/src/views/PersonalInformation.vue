<template>
  <div class="table-wrapper">
    <table  ref="table">
      <tr>
        <td>账号:</td>
        <td>{{ user.account }}</td>
      </tr>
      <tr>
        <td>用户名:</td>
        <td>{{ user.username }}</td>
      </tr>
      <tr>
        <td>密码:</td>
        <td>******</td>
      </tr>
      <tr>
        <td>电话:</td>
        <td>{{ user.phone }}</td>
      </tr>
      <tr>
        <td colspan="2"><el-button type="primary" @click="edit">编辑</el-button></td>
      </tr>
    </table>
    <el-dialog
        v-model="dialogVisible"
        title="新增"
        width="30%"
    >
      <el-form :model="user" label-width="120px">
        <el-form-item label="账号">
        <el-input v-model="user.account" style="width: 80%" disabled></el-input>
      </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="user.username" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="user.phone" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save">
          确认
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>

</template>

<script>
import {ElForm, ElFormItem, ElInput, ElButton, ElMessage} from 'element-plus';
import {Avatar, Lock} from '@element-plus/icons-vue';
import request from '@/utils/request';

export default {
  name: 'PersonalInformation',
  components: {},
  created() {
    let userStr = sessionStorage.getItem("user") || "{}"
    this.tableData = JSON.parse(userStr)
    // console.log(this.tableData)
    // console.log(this.tableData)
    request.get("/auditors/"+this.tableData.id).then(res => {
      if(res.code=="0")
      {
        this.user=res.data
      }
    })
  },
  data() {
    return {
      user:{},
      dialogVisible:false,//弹窗
    };
  },
  methods: {
    edit(){
    this.dialogVisible=true
    },
    save(){
        request.put("/auditors",this.user).then(res => {
          console.log(res)
          if(res.code=='0'){
            this.$message({
              type:"success",
              message:"更新成功"
            })
          }else {
            this.$message({
              type:"error",
              message:res.msg
            })
          }
          this.dialogVisible=false
        })
      }

  },

};
</script>

<style scoped>
.table-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

table {
  border-collapse: collapse;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  min-width: 350px;
  margin-left: 400px;
  margin-top: 200px;

}

th {
  background-color: #f2f2f2;
  color: #333;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

tr:last-child td {
  border-bottom: none;
}
</style>