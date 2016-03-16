# imgcat [![NPM version](https://img.shields.io/npm/v/imgcat.svg)](https://npmjs.com/package/imgcat) [![NPM downloads](https://img.shields.io/npm/dm/imgcat.svg)](https://npmjs.com/package/imgcat)

This module is a high level wrapper of SindreSorhus's [term-img](https://github.com/sindresorhus/term-img), to display images from both URL and file path. Actually this requires iTerm 2.9+ too.

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

### imgcat(input, [options, events])

#### input

Type: `string`

Image path or URL.

#### options

[term-img](https://github.com/sindresorhus/term-img) options. See https://github.com/sindresorhus/term-img#api.

#### events

Type: `object`

##### before

Type: `function`

Everything started.

##### after

Type: `function`

Everything done.

##### beforeDownload

Type: `function`

The download is started.

##### afterDownload

Type: `function`

The download is done.

## License

MIT © [EGOIST](https://github.com/egoist)
