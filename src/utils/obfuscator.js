/*
[webpack-obfuscator](https://www.npmjs.com/package/webpack-obfuscator)

[javascript-obfuscator](https://www.npmjs.com/package/javascript-obfuscator)

webpack4:
[webpack-obfuscator@^2.6.0](https://www.npmjs.com/package/webpack-obfuscator/v/2.6.0)
[javascript-obfuscator@^2.6.0](https://www.npmjs.com/package/javascript-obfuscator/v/2.6.0)
*/
const path = require('node:path')
const WebpackObfuscator = require('webpack-obfuscator')

exports.rules = [
  {
    test: /\.js$/,
    exclude: [
      path.resolve(__dirname, 'excluded_file_name.js')
    ],
    enforce: 'post',
    use: {
      loader: WebpackObfuscator.loader,
      options: {
        rotateStringArray: true
      }
    }
  }
]

exports.plugins = [
  new WebpackObfuscator ({
    rotateStringArray: true
  }, ['excluded_bundle_name.js'])
]
