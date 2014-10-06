'use strict';

var assert = require('assert');
var cheerio = require('cheerio');
var iconmartGlyphiconsCrawler = require('./');

describe('iconmart-glyphicons-crawler', function(){
  this.timeout(0);

  var icons;
  before(function(done){
    iconmartGlyphiconsCrawler()
      .then(function(data){
        icons = data;

        done();
      });
  });

  it('should return array of icons', function(){
    assert(icons.length);
  });

  it('each icon should have a correct name', function(){
    assert(icons[0].name);
  });
});
