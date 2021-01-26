module.exports = {
  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // 配置 webpack-dev-server 行为。
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,

  devServer: {
    //自动打开网页
    open: true,

    host: '0.0.0.0',
    //指定端口号
    port: 8080,
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck:true,
    https: false,

    hotOnly: false,

    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      '/api': {
        target: "http://admintest.happymmall.com",  //接口域名
        changeOrigin: true,  //是否跨域
        secure: false,    //false为http访问，true为https访问
        pathRewrite: {    //重写路径
          "^/api": ""
        }
      },

    }
  }
}