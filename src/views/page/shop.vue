<template>
  <div class="shop">
    <el-container style="height: 92vh">
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home">
            <i class="el-icon-s-data"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商品</span>
            </template>
            <el-menu-item index="/goods">商品管理</el-menu-item>
            <el-menu-item index="/category">品类管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-claim"></i>
              <span>订单</span>
            </template>
            <el-menu-item index="/order">订单管理</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户</span>
            </template>
            <el-menu-item index="/user">用户列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="background: #f3f3f3">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>


<style lang="scss" scoped>
.el-aside {
  width: 250px !important;
}
.el-container {
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>