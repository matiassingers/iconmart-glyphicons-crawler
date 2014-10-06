'use strict';

var request = require('promise-request');
var Promise = require('bluebird');
var cheerio = require('cheerio');
var _ = require('lodash');

module.exports = function() {
  var url = 'http://iconmart.in/';

  return request(url)
    .then(function(body){
      var $ = cheerio.load(body);
      var items = $('.preview ul .item-box a i').toArray();

      var icons = _.map(items, function(item){
        var className = $(item).attr('class');

        return {
          name: className.slice(2),
          tags: ''
        };
      });

      return Promise.resolve(icons);
    });
};
