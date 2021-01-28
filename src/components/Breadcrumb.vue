<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: $route.meta.parentPath }">{{$route.meta.title}}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.meta.titleChild">{{$route.meta.titleChild}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss">
.el-breadcrumb {
  height: 25px;
  min-width: 100px;
  border-bottom: 1px solid #cccccc;
}
span span {
  font-weight: 700 !important;
}
</style>