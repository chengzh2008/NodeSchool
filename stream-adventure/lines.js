'use strict';

var throuth = require('through');
var split = require('split');
var flag = true;

process.stdin.pipe(split()).pipe(
    throuth(function (line) {
        if (flag) {
            this.queue(line.toString().toLowerCase() + '\n');
        } else {
            this.queue(line.toString().toUpperCase() + '\n');
        }
        flag = !flag;
    })
).pipe(process.stdout);