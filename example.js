'use strict'
const co = require('co')
const imgcat = require('./')

co(function* () {
  console.log('file')
  const tempPath = yield imgcat('fixture.gif')
  console.log(tempPath)
  console.log('url')
  let time = new Date().getTime()
  const events = {
    before() {
      console.log('before')
    },
    beforeDownload() {
      console.log('Downloading...')
    },
    afterDownload() {
      const dur = new Date().getTime() - time
      console.log(`Downloaded...${dur}ms`)
    },
    after() {
      console.log('after')
    }
  }
  const image = yield imgcat('http://ww4.sinaimg.cn/large/a15b4afegw1enz38of1lug20dw07t1kx.gif', {}, events)
  console.log(image)
}).catch(e => {
  console.log(e.stack)
  process.exit(1)
})
