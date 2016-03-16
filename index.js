'use strict'
const path = require('path')
const co = require('co')
const tempFile = require('tempfile')
const termImg = require('term-img')
const isUrl = require('is-url')
const pget = require('pget')

module.exports = co.wrap(function* (file, options) {
  if (isUrl(file)) {
    const tempPath = tempFile()
    const dir = path.dirname(tempPath)
    const target = path.basename(tempPath)
    yield pget(file, {dir, target, quiet: true})
    yield termImg(tempPath, options)
  } else {
    yield termImg(file, options)
  }
})
