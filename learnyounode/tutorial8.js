"use strict";

var http = require("http"),
    address = process.argv[2],
    bl = require("bl");
//var bl = new BufferList();
http.get(address, function (res) {
    //res.on("data", function (data) {
    //    bl.append(data);
    //});
    //res.on("end", function (data) {
    //    console.log(bl.toString().length);
    //    console.log(bl.toString());
    //});

    // you can use pipe funciton
    res.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));


});