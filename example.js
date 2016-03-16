'use strict'
const co = require('co')
const imgcat = require('./')

co(function* () {
  console.log('file')
  yield imgcat('fixture.gif')
  console.log('url')
  yield imgcat('http://ww4.sinaimg.cn/large/a15b4afegw1enz38of1lug20dw07t1kx.gif')
}).catch(e => {
  console.log(e.stack)
  process.exit(1)
})
