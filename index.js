'use strict';

var request = require('promise-request');
var cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var $;

function run(destination){
  return fetchWebpage()
    .then(handleItems)
    .then(function writeFile(icons) {
      var destinationPath = destination ? path.join(destination, 'data') : __dirname;

      var file = path.join(destinationPath, 'icons-iconmart.json');
      var data = JSON.stringify(icons, null, 2);

      console.log('writing file to', file);

      fs.writeFile(file, data, function(error) {
        if(error)
          return console.log(error);
      });
    });
}

function fetchWebpage(){
  var url = 'http://iconmart.in/';

  return request(url)
    .then(function(body){
      $ = cheerio.load(body);

      return $('.preview ul .item-box a i').toArray();
    });
}

function handleItems(items){
  var icons = _.map(items, function(item){
    var element = $(item);

    return {
      name: element.attr('class'),
      tags: ''
    };
  });

  return {
    foundation: icons
  };
}

module.exports = {
  run: run,
  fetchWebpage: fetchWebpage
};
