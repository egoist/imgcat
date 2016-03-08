var fs = require('fs')
var isIterm = require('is-iterm')
var itermVersion = require('iterm-version')
var pify = require('pify')
var Promise = require('pinkie-promise')

function base64(content) {
	return new Buffer(content).toString('base64')
}

function meta(content, width) {
	width = width || 400
	return '\033]1337;File=;inline=1;width=' + width + 'px:' + content + '\07\n'
}

function imgcat(img, width) {
	width = width || 400
	if (!isIterm) {
		return Promise.reject(new Error('You are not running in Iterm2!'))
	}

	function resolveImg() {
		return pify(fs, Promise)
			.readFile(img)
			.then(function (content) {
				content = base64(content)
				return meta(content, width)
			})
	}

	return itermVersion()
		.then(function (version) {
			if (!validItermVersion(version)) {
				throw new Error('Expected iTerm vesion >= 2.9')
			}
		})
		.then(resolveImg)
}

function sync(img, width) {
	var version = itermVersion.sync()
	if (!validItermVersion(version)) {
		throw new Error('Expected iTerm vesion >= 2.9')
	}
	var content = fs.readFileSync(img)
	content = base64(content)
	return meta(content, width)
}

function validItermVersion(version) {
	version = version.split('.')
	return version[0] > 1 && version[1] > 8
}


module.exports = imgcat
module.exports.sync = sync
module.exports.fromString = meta
