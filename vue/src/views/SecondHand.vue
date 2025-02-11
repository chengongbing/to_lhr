<template>
  <div style="padding:10px">
<!--        搜索区-->
    <div style="padding:10px;">
      <el-input v-model="search_msg" :placeholder="$t('enterTopic')" style="width: 20%" clearable></el-input>
      <el-button type="primary" @click="load" style="margin-left: 10px">{{ $t('search') }}</el-button>
    </div>

    <el-table :data="tableData" stripe style="width:1300px" border>
      <el-table-column label="序号" type="index" sortable width="100"/>
      <el-table-column prop="itemName" label="名称"/>
      <el-table-column prop="quantity" label="数量"/>
      <el-table-column prop="description" label="描述"/>
      <el-table-column prop="price" label="价格"/>
      <el-table-column prop="account" label="账号"/>
      <el-table-column prop="createdAt" label="时间"/>

      <el-table-column label="操作">
      <template #default="scope">
        <el-popconfirm title="确认通过吗?" @confirm="handleYes(scope.row)">
          <template #reference>
            <el-button size="small" type="success">通过</el-button>
          </template>
        </el-popconfirm>

        <el-popconfirm title="确认驳回吗?" @confirm="handleNo(scope.row)">
          <template #reference>
            <el-button
                size="small"
                type="danger"
            >驳回
            </el-button>
          </template>
        </el-popconfirm>
      </template>
      </el-table-column>
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
  name: 'SecondHand',
  components: {},
  created() {
    this.load()
  },
  methods: {
    load() {
      request.get("/secondhand", {
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
    handleYes(row) {
      // this.form.pass=1
      console.log(row)
      row.auditStatus=1
      request.put("/secondhand",row).then(res => {
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
      row.auditStatus=-1
      request.put("/secondhand",row).then(res => {
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
