const path = require('path')
const env = process.env.NODE_ENV
const outputDir = env === 'development' ? 'dev-dist' : 'prod-dist'
console.log('env:', env)
console.log('outputDir:', outputDir)

module.exports = {
  publicPath: '/', // 公共路径
  outputDir: outputDir, // 不同的环境打不同包名
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  css: {
    // 一次配置，全局使用，这个less 因为每个文件都要引入
    loaderOptions: {
      less: {
        // data: `@import "./src/assets/hotcss/px2rem.less";`
      }
    }
  },
  lintOnSave: false, // 关闭eslint
  productionSourceMap: true, // 生产环境下css 分离文件
  devServer: {
    // 配置服务器
    port: 8085,
    open: true,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    // 覆盖webpack默认配置的都在这里
    resolve: {
      // 配置解析别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@v': path.resolve(__dirname, './src/views'),
        '@c': path.resolve(__dirname, './src/components'),
        '@s': path.resolve(__dirname, './src/assets/style'),
        '@i': path.resolve(__dirname, './src/assets/images')
      }
    }
  }
}
