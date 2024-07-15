const path = require('path')
const { VUE_APP_TARGET } = process.env
const WebpackObfuscator = require('webpack-obfuscator')
const { plugins: webpackObfuscatorPlugins } = require('./src/utils/obfuscator')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  publicPath: VUE_APP_TARGET === 'PROD' ? '/learn-js-obfuscator' : '/',
  configureWebpack: {
    plugins: [
      ...webpackObfuscatorPlugins
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
  }
}
