<template>
  <div class="home">
    <h3>请登录</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item>
        <el-input v-model="form.username" placeholder="User Name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="Password"></el-input>
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
        this.$store.commit('saveName', this.form.username)
        this.$router.push('/home')
      })
    }
  },
  mounted () {

  },
}
</script>


<style lang="scss" scoped>
.home {
  width: 400px;
  height: 240px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  border: 1px solid #ddd;
  box-sizing: border-box;
  h3 {
    padding: 10px;
    height: 30px;
    line-height: 30px;
    background: #f5f5f5;
  }
  .el-form {
    padding: 10px;
  }
  .el-form-item {
    margin: 0 0 15px -80px !important;
  }
  .el-button {
    width: 100%;
    background: #337ab7;
    border-color: #2e6da4;
  }
}
</style>