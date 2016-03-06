var fs = require('fs')
var fsPromise = require('fs-promise')

function base64(content) {
	return new Buffer(content).toString('base64')
}

function meta(content, width) {
	width = width || 400
	return '\033]1337;File=;inline=1;width=' + width + 'px:' + content + '\07\n'
}

function imgcat(img, width, cb) {
	cb = typeof width === 'function' ? width : cb
	width = typeof width === 'number' ? width : 400
	if (cb) {
		fs.readFile(img, function (err, content) {
			if (err) {
				return cb(err)
			}
			content = meta(base64(content), width)
			cb(null, content)
		})
	} else {
		return fsPromise.readFile(img)
			.then(function (content) {
				content = base64(content)
				return meta(content, width)
			})
	}
}

function sync(img, width) {
	var content = fs.readFileSync(img)
	content = base64(content)
	return meta(content, width)
}


module.exports = imgcat
module.exports.sync = sync
module.exports.fromString = meta
