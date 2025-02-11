<template>
  <div style="padding:10px">
<!--        搜索区-->
    <div style="padding:10px;">
      <el-input v-model="search_msg" :placeholder="$t('enterTopic')" style="width: 20%" clearable></el-input>
      <el-button type="primary" @click="load" style="margin-left: 10px">{{ $t('search') }}</el-button>
    </div>

    <el-table :data="tableData" stripe style="width:1300px" border>
      <el-table-column :label="$t('serialNumber')" type="index" sortable width="100" />
      <el-table-column prop="subject" :label="$t('topic')" />
      <el-table-column prop="content" :label="$t('content')" />
      <el-table-column prop="location" :label="$t('location')" />
      <el-table-column prop="account" :label="$t('account')" />
      <el-table-column prop="time" :label="$t('publishTime')" />
    </el-table>

<!--页号-->
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
  </div>
</template>

<script>

import request from "@/utils/request";

export default {
  name: 'AssistanceYes',
  components: {},
  created() {
    this.load()
  },
  methods: {
    load() {
      request.get("/assistance_yes", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search:this.search
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    search() {
      request.get("/assistance_yes", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search_msg:this.search_msg
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    handleYes(row) {
      // this.form.pass=1
      console.log(row)
      row.status=1
      request.put("/assistance_yes",row).then(res => {
        console.log(res)
        if(res.code=='0'){
          this.$message({
            type:"success",
            message:"操作成功"
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
    handleNo(row) {
      // this.form.pass=1
      console.log(row)
      row.status=-1
      request.put("/assistance_yes",row).then(res => {
        console.log(res)
        if(res.code=='0'){
          this.$message({
            type:"success",
            message:"操作成功"
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
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum
      this.load()
    },
    // 新增
    add() {
      this.dialogVisible = true
      this.form = {}
    },
    save() {
      if (this.form.id) {//更新提交
        request.put("/user", this.form).then(res => {
          console.log(res)
          if (res.code == '0') {
            this.$message({
              type: "success",
              message: "更新成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.dialogVisible = false
          this.load()
        })
      } else {//新增提交
        request.post("/user", this.form).then(res => {
          console.log(res)
          if (res.code == '0') {
            this.$message({
              type: "success",
              message: "新增成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.dialogVisible = false
          this.load()
        })
      }

    }

  },
  data() {
    return {
      search: "",
      total: 0,
      currentPage: 1,
      pageSize: 10,
      pageNum: 1,
      dialogVisible: false,//弹窗
      form: {},//新增用户信息
      tableData: []
    }
  }
}
</script>
