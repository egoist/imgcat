![logo](/media/imgcat.png)

[![NPM version](https://img.shields.io/npm/v/imgcat.svg)](https://npmjs.com/package/imgcat) [![NPM downloads](https://img.shields.io/npm/dm/imgcat.svg)](https://npmjs.com/package/imgcat)

> Display image in iTerm2 version 2.9+

## Install

```bash
$ npm install --save imgcat
```

## Usage

### callback mode

**imgcat(file[, width], callback)**

```js
imgcat('foo.jpg', img => {
	console.log(img)
})
```

### Promise mode

**imgcat(file[, width])**

```js
imgcat('foo.jpg')
	.then(img => {
		console.log(img)
	})
```

### Sync mode

**imgcat.sync(file[, width])**

```js
const img = imgcat.sync(file)
console.log(img)
```

## CLI

### Install

```bash
$ npm install -g imgcat
```

### Usage

```bash
$ imgcat a.jpg
$ imgcat -h
```

## License

The shell script is borrowed from https://iterm2.com/imgcat.
