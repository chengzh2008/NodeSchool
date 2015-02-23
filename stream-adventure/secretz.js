'use strict';

var cipherName = process.argv[2];
var cipherPass = process.argv[3];
var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');
var parser = tar.Parse();

parser.on('entry', function (e) {
    if (e.type !== 'File') return;
    e.pipe(crypto.createHash('md5', {encoding: 'hex'}))
        .pipe(through(null, function () {
            this.queue(' ' + e.path + '\n');
        }))
        .pipe(process.stdout);
})

process.stdin.pipe(crypto.createDecipher(cipherName, cipherPass))
    .pipe(zlib.createGunzip())
    .pipe(parser);