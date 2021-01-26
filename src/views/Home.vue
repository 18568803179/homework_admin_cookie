<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="wrap">
          <div class="title">
            <span style="color: #2daec6; font-size: 30px">HAPPY</span>
            <span style="color: white; font-size: 30px">MMALL</span>
          </div>
          <div class="userinfo">
            <i class="el-icon-user-solid"></i>
            <p>欢迎，{{ this.$store.state.userinfo.username }}</p>
            <el-button size="small" style="margin-left: 10px" @click="exit">退出</el-button>
          </div>
        </div>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {
      
    };
  },

  methods: {
    exit(){
      this.$router.push('/login')
    }
  },

  mounted () { },
};
</script>
<style lang="scss" scoped>
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
</style>


