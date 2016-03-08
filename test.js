var imgcat = require('./')
// sync
console.log('sync')
console.log(imgcat.sync('media/imgcat.png'))
// promise
imgcat('media/imgcat.png', 500)
	.then(function (image) {
		console.log('promise')
		console.log(image)
	})
	.catch(function (e) {
		console.log(e.stack)
	})
