'use strict';

var request = require('promise-request');
var cheerio = require('cheerio');
var _ = require('lodash');

var $;

function run(destination){
  return fetchWebpage()
    .then(handleItems);
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
