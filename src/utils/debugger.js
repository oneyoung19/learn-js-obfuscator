/*
[禁止别人调试自己的前端页面代码](https://juejin.cn/post/7262175454714626108)

[“绕过”前端反调试](https://juejin.cn/post/7283776161527578661)

也可以借助第三方库[disable-devtool](https://www.npmjs.com/package/disable-devtool)

禁止调试的第三方网站：
[js-object-to-json](https://tooltt.com/js-object-to-json/)
[文心一言](https://yiyan.baidu.com/)
*/

/*
基础禁止调试代码
这种形式依然能够在代码中直接看到 而不是创建了VM
*/
// (() => {
//   function ban () {
//     setInterval(() => {
//       debugger
//     }, 50)
//   }
//   try {
//     ban()
//   } catch (err) {}
// })()

/*
进阶1
利用Function创建VM
*/
// (() => {
//   function ban () {
//     setInterval(() => {
//       // eslint-disable-next-line
//       Function('debugger')()
//     }, 50)
//   }
//   try {
//     ban()
//   } catch (err) {}
// })()

/*
进阶2
更改Function('debugger'){}的写法
*/
(() => {
  function ban () {
    setInterval(() => {
      (function () {
        return false
      })
        .constructor('debugger')
        .call()
    }, 50)
  }
  try {
    ban()
  } catch (err) {}
})()
