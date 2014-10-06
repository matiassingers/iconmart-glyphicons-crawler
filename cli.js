#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');

var pkg = require('./package.json');
var iconmartGlyphiconsCrawler = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    iconmart-glyphicons-crawler /path/to/glyphsearch',
    '',
    '    writing file to /path/to/glyphsearch/data/icons-iconmart.json',
    ''
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

var destination = argv[0];

iconmartGlyphiconsCrawler()
  .then(function(icons){
    var destinationPath = destination ? path.join(destination, 'data') : __dirname;

    var file = path.join(destinationPath, 'icons-iconmart.json');
    var data = JSON.stringify({ iconmart: icons }, null, 2);

    console.log('writing file to', file);

    fs.writeFile(file, data, function(error) {
      if(error)
        return console.log(error);
    });
  });
