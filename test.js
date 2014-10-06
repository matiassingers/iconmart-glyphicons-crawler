'use strict';

var assert = require('assert');
var cheerio = require('cheerio');
var iconmartGlyphiconsCrawler = require('./');

describe('fetchWebpage()', function(){
  this.timeout(0);

  var icons;
  before(function(done){
    iconmartGlyphiconsCrawler.fetchWebpage()
      .then(function(response){
        icons = response;

        done();
      });
  });

  it('should return array of icons', function(){
    assert(icons.length);
  });

  it('each icon should have data-dropdown attr', function(){
    assert(icons[0].attribs.class);
  });
});
