module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  }
}
