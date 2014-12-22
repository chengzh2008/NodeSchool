var fs = require("fs");
var path = require("path");

var mymodule = function(dir, ext, callback) {
    fs.readdir(dir, function(err, data){
        if (err) return callback(err);
        var filtered = data.filter(function(item){
           return path.extname(item) === "." + ext;
        });

        return callback(null, filtered);

    });

};

module.exports = mymodule;