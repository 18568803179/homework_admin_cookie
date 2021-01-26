<template>
  <div class="home">
    <h3>请登录</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Login } from "@/api/methods"
export default {
  data () {
    return {
      form: {
        username: "admin",
        password: "admin"
      }
    }
  },
  methods: {
    onSubmit () {
      Login(this.form).then(res => {
        console.log(res);
      })
    }
  },
  mounted () {
    this.$axios.post('http://admintest.happymmall.com/manage/user/login.do',
      { username: 'admin', password: 'admin' }).
      then(res => { console.log(res); })
  },
}
</script>


<style lang="scss">
.home {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  h3 {
    text-indent: 80px;
  }
  .el-button {
    width: 100%;
  }
}
</style>