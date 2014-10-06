# iconmart-glyphicons-crawler [![Build Status](http://img.shields.io/travis/matiassingers/iconmart-glyphicons-crawler.svg?style=flat-square)](https://travis-ci.org/matiassingers/iconmart-glyphicons-crawler) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/iconmart-glyphicons-crawler.svg?style=flat-square)](https://gemnasium.com/matiassingers/iconmart-glyphicons-crawler)
> crawls the Iconmart website and formats the icons for GlyphSearch

## Install

```sh
$ npm install --save iconmart-glyphicons-crawler
```


## Usage

```js
var iconmartGlyphiconsCrawler = require('iconmart-glyphicons-crawler');

iconmartGlyphiconsCrawler()
  .then(function(icons){
    console.log(icons.length);
    // => 512
    
    console.log(icons[0]);
    // => { name: 'i-adjustment', tags: '' }
  });

```


## CLI

```sh
$ npm install --global iconmart-glyphicons-crawler
```

```sh
$ iconmart-glyphicons-crawler --help

  Example
    iconmart-glyphicons-crawler /path/to/glyphsearch
    
    writing file to /path/to/glyphsearch/data/icons-iconmart.json
```


## License

MIT © [Matias Singers](http://mts.io)
