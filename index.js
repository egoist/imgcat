'use strict'
/* eslint no-unused-expressions: [2, { allowShortCircuit: true }] */
const path = require('path')
const co = require('co')
const tempFile = require('tempfile')
const termImg = require('term-img')
const isUrl = require('is-url')
const pget = require('pget')

module.exports = co.wrap(function* (file, options, events) {
  const on = events || {}
  on.before && on.before()
  if (isUrl(file)) {
    const tempPath = tempFile()
    const dir = path.dirname(tempPath)
    const target = path.basename(tempPath)
    on.beforeDownload && on.beforeDownload()
    yield pget(file, {dir, target, quiet: true})
    on.afterDownload && on.afterDownload()
    yield termImg(tempPath, options)
  } else {
    yield termImg(file, options)
  }
  on.after && on.after()
})
