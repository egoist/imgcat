var imgcat = require('./')
// async
imgcat('media/imgcat.png', function (err, content) {
	if (err) {
		return console.log(err)
	}
	console.log('async')
	console.log(content)
})
// sync
console.log('sync')
console.log(imgcat.sync('media/imgcat.png'))
// promise
imgcat('media/imgcat.png', 500)
	.then(function (image) {
		console.log('promise')
		console.log(image)
	})
