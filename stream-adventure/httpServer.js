'use strict';

var http = require('http');
var through = require('through');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function (data) {
            data.toString().toUpperCase();
        })).pipe(res);
    } else {
        res.end('The request is not a post request');
    }

});
server.listen(process.argv[2]);