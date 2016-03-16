# imgcat [![NPM version](https://img.shields.io/npm/v/imgcat.svg)](https://npmjs.com/package/imgcat) [![NPM downloads](https://img.shields.io/npm/dm/imgcat.svg)](https://npmjs.com/package/imgcat) [![Build Status](https://img.shields.io/circleci/project/egoist/imgcat/master.svg)](https://circleci.com/gh/egoist/imgcat)

> Display image in iTerm2 version 2.9+

## Install

```bash
$ npm install --save imgcat
```

## Usage

```js
const imgcat = require('imgcat')

// print image from file
imgcat('a.gif')
  .catch(e => {
    console.log(e.name)
  })

// print image from url
imgcat('http://path/to/image')
```

## API

### imgcat(input, [options])

#### input

Type: `string`

Image path or URL.

#### options

[term-img](https://github.com/sindresorhus/term-img) options. See https://github.com/sindresorhus/term-img#api.

## License

MIT © [EGOIST](https://github.com/egoist)
