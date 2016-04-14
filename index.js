'use strict'
/* eslint no-unused-expressions: [2, { allowShortCircuit: true }] */
const path = require('path')
const co = require('co')
const tempFile = require('tempfile')
const termImg = require('term-img2')
const isUrl = require('is-url')
const pget = require('pget')

module.exports = co.wrap(function* (file, options, events) {
  const on = events || {}
  on.before && on.before()
  let tempPath
  let image
  if (isUrl(file)) {
    tempPath = tempFile()
    const dir = path.dirname(tempPath)
    const target = path.basename(tempPath)
    on.beforeDownload && on.beforeDownload()
    yield pget(file, {dir, target, quiet: true})
    on.afterDownload && on.afterDownload()
    image = termImg(tempPath, options)
  } else {
    image = termImg(file, options)
  }
  on.after && on.after()
  return image
})
