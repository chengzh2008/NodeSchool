'use strict';

var duplexer = require('duplexer');
var through = require('through');

module.exports = function(counter) {
    var counts = {};
    var transformStream = through(
        function(data){
            counts[data.country] = (counts[data.country] || 0) + 1;
    },  function() {
            counter.setCounts(counts);
        });

    return duplexer(transformStream, counter);
}