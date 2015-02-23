'use strict';

var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');
var obj = {};


module.exports = function () {
    var genreInfo;
    return combine(
        split(),
        through(function (data) {
            // check if there is no data
            if (!data.length) return;
            data = JSON.parse(data.toString());
            if (data.type === 'genre') {
                if (genreInfo) {
                    // when the line of 'genre' comes, dump the current genreinfo data
                    this.queue(JSON.stringify(genreInfo) + '\n');

                }
                // initialize a new object
                genreInfo = {
                    name: data.name,
                    books: []
                }
            } else {
                genreInfo.books.push(data.name);
            }

        },
        function() {
            //
            this.queue(JSON.stringify(genreInfo) + '\n');
            this.queue(null);
        }),
        zlib.createGzip()
    );

};