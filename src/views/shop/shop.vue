<template>
  <div>
    <div class="shop">
      <span>商品管理</span>
      <el-button type="info" @click="$router.push('/shopDetail')">+添加商品</el-button>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label>
        <el-select v-model="formInline.condition" placeholder="按商品id查询">
          <el-option label="按商品id查询" value="productId"></el-option>
          <el-option label="按商品名称查询" value="productName"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label>
        <el-input v-model="formInline.value" placeholder="关键词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list" style="width: 100%">
      <el-table-column prop="id" label="ID" width="150"></el-table-column>
      <el-table-column prop="name" label="信息" width="180"></el-table-column>
      <el-table-column prop="price" label="价格" width="180"></el-table-column>
      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          {{ scope.row.status == 2 ? "已下架" : "在售" }}
          <button
            @click="update_status(scope.row.id,scope.row.status)"
          >{{ scope.row.status == 1 ? "下架" : "上架" }}</button>
        </template>
      </el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope>
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-size="pageSize"
      :total="total"
    ></el-pagination>
  </div>
</template>

<style lang="scss" scoped>
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
.shop {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  font-size: 24px;
  height: 46px;
  align-items: baseline;
}
.el-form--inline {
  margin-top: 22px;
}
</style>

<script>
import { getShop, Search, updateStatus } from '@/api/methods'
export default {
  methods: {
    search () {  //搜索数据
      let condition = this.formInline.condition
      let value = this.formInline.value
      Search({ condition, value }).then(res => {
        console.log(res);
        this.list = res.data.data.list;
      })
    },
    update_status (id, status) {  //修改商品上下架状态
      let txt = status == 1 ? '下架' : '上架';
      this.$confirm(`确定${txt}该商品?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        status = status == 1 ? 2 : 1;
        updateStatus({ id, status }).then(res => {
          this.$message({
            type: 'success',
            message: `${txt}成功!`
          });
          this.getShopInfo()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: `已取消${txt}`
        });
      });

    },
    handleCurrentChange (val) {  //分页改变数据
      this.pageNum = val
      this.getShopInfo()
    },
    //封装请求数据方法
    getShopInfo () {
      getShop({ num: this.pageNum }).then(res => {
        console.log(res);
        this.list = res.data.data.list;
        this.total = res.data.data.total;
      })
    }
  },
  data () {
    return {
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
      formInline: {
        condition: "",
        value: "",
      },
    };
  },
  mounted () {
    this.getShopInfo()
  },
};
</script>



