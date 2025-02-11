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
      <el-input v-model="search" placeholder="请输入内容" style="width: 20%" clearable></el-input>
      <el-button type="primary" @click="load" style="margin-left: 10px">查询</el-button>
    </div>

    <el-table :data="tableData" stripe style="width:1300px" border ref="table">
      <el-table-column label="序号" type="index" sortable width="100"/>
      <el-table-column prop="content" label="内容" />
      <el-table-column prop="publisher" label="发布人" />
      <el-table-column prop="time" label="时间"/>
      <el-table-column label="操作" width="100px">
        <template #default="scope">
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
        <el-form-item label="内容">
          <el-input v-model="form.content" style="width: 80%" type="textarea" :rows="4"></el-input>
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
import * as XLSX from "xlsx"
export default {
  name: 'Notifications',
  components: {

  },
  created(){
    this.load()
  },
  methods:{
    load(){
      request.get("/notifications",{
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
    exportExcel() {
      const sheet = XLSX.utils.table_to_sheet(this.$refs.table.$el) // 将表格转换为工作表，需要修改引用名称

      const workbook = XLSX.utils.book_new() // 新建工作簿对象
      XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1') // 设置工作表名称并添加到工作簿
      XLSX.writeFile(workbook, 'data.xlsx') // 将工作簿写入文件并设置文件名
    },
    handleEdit(row){
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible=true
    },
    handleDelete(id){
      request.delete("/notifications/"+id).then(res => {
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
    save(){
      let userStr=sessionStorage.getItem("user")
      this.form.publisher=JSON.parse(userStr).account
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hour = String(now.getHours()).padStart(2, '0');
      const minute = String(now.getMinutes()).padStart(2, '0');
      const second = String(now.getSeconds()).padStart(2, '0');
      this.form.time=`${year}-${month}-${day} ${hour}:${minute}:${second}`;
        request.post("/notifications",this.form).then(res => {
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
