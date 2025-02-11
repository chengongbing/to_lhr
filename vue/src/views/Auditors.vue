<template>
  <div style="padding:10px">
    <!--    功能区-->
    <div style="margin: 10px 10px">
      <el-button type="primary" @click="add">新增</el-button>
<!--      <el-button type="primary">导入</el-button>-->
      <el-button type="primary" @click="exportExcel">导出</el-button>
    </div>
    <!--    搜索区-->
    <div style="padding:10px;">
      <el-input v-model="search" placeholder="请输入用户名" style="width: 20%" clearable></el-input>
      <el-button type="primary" @click="load" style="margin-left: 10px">查询</el-button>
    </div>

    <el-table :data="tableData" stripe style="width:1300px" border ref="table">
      <el-table-column label="序号" type="index" sortable width="100"/>
      <el-table-column prop="account" label="账号"/>
      <el-table-column prop="username" label="用户名"/>
      <el-table-column prop="phone" label="电话"/>
      <el-table-column prop="workload" label="工作量"/>
      <el-table-column prop="role" label="角色">
        <template #default="scope">
          <span v-if="scope.row.role==1">管理员</span>
          <span v-if="scope.row.role==0">审核员</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="确认删除吗?" @confirm="handleDelete(scope.row.id)">
            <template #reference>
              <el-button
                  size="small"
                  type="danger"
              >删除</el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px 0">
      <div class="demo-pagination-block">
        <el-pagination
            v-model:current-page="currentPage"
            page-size="pageSize"
            :page-sizes="[5, 10, 20]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <el-dialog
        v-model="dialogVisible"
        title="新增"
        width="30%"
    >
      <el-form :model="form" label-width="120px">
        <el-form-item label="账号">
          <el-input v-model="form.account" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone" style="width: 80%"></el-input>
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

<script >

import request from "@/utils/request";
import * as XLSX from 'xlsx';
export default {
  name: 'Auditors',
  components: {

  },
  created(){
    this.load()
  },
  methods:{
    load(){
      request.get("/auditors",{
        params: {
          pageNum:this.currentPage,
          pageSize:this.pageSize,
          search:this.search
        }
      }).then(res => {
        console.log(res)
        this.tableData=res.data.records
        this.total=res.data.total
      })
    },

    handleEdit(row){
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible=true
    },
    handleDelete(id){
      request.delete("/auditors/"+id).then(res => {
        console.log(res)
        if(res.code=='0'){
          this.$message({
            type:"success",
            message:"删除成功"
          })
        }else {
          this.$message({
            type:"error",
            message:res.msg
          })
        }
        this.dialogVisible=false
        this.load()
      })
    },
    handleSizeChange(pageSize){
      this.pageSize=pageSize
      this.load()
    },
    handleCurrentChange(pageNum){
      this.pageNum=pageNum
      this.load()
    },
    // 新增
    add(){
      this.dialogVisible=true
      this.form={}
    },
    exportExcel() {
      const sheet = XLSX.utils.table_to_sheet(this.$refs.table.$el) // 将表格转换为工作表，需要修改引用名称

      // 删除从第7列开始的所有列
      for (let i = 0; i < sheet['!ref'].split(':')[1].replace(/[a-zA-Z]+/g, ''); i++) { // 遍历行
        for(let j = 6; j <= sheet['!ref'].split(':')[1].replace(/[0-9]+/g,''); j++){ // 遍历第7列及之后的所有列
          delete sheet[XLSX.utils.encode_cell({r: i, c: j})] // 删除单元格
        }
      }

      const workbook = XLSX.utils.book_new() // 新建工作簿对象
      XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1') // 设置工作表名称并添加到工作簿
      XLSX.writeFile(workbook, 'data.xlsx') // 将工作簿写入文件并设置文件名
    },
    save(){
      this.form.password="123"
      this.form.workload=0
      this.form.role=0

      request.post("/auditors",this.form).then(res => {
        console.log(res)
        if(res.code=='0'){
          this.$message({
            type:"success",
            message:"新增成功"
          })
        }else {
          this.$message({
            type:"error",
            message:res.msg
          })
        }
        this.dialogVisible=false
        this.load()
      })
    }

  },
  data(){
    return {
      search:"",
      total:0,
      currentPage:1,
      pageSize:10,
      pageNum:1,
      dialogVisible:false,//弹窗
      form:{},//新增用户信息
      tableData:[]
    }
  }
}
</script>
