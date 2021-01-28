<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="wrap">
          <div class="title">
            <span style="color: #2daec6; font-size: 30px">MMALL</span>
            <span style="color: white; font-size: 30px">ADMIN</span>
          </div>
          <div class="userinfo">
            <i class="el-icon-user-solid"></i>
            <p>欢迎，{{ this.$store.state.userinfo.username }}</p>
            <el-button size="small" style="margin-left: 10px" @click="exit">退出</el-button>
          </div>
        </div>
      </el-header>
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
          <Bread></Bread>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Bread from '../components/Breadcrumb'
export default {
  components:{
    Bread
  },
  data () {
    return {

    };
  },
  mounted () {

  },
  methods: {
    exit () {
      this.$router.push('/')
    }
  },

};
</script>
<style lang="scss">
.el-header {
  padding: 0 !important;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  width: 249.5px;
  height: 100%;
  background-color: #32323a;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userinfo {
  width: 200px;
  height: 100%;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
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


