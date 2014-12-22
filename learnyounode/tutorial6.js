var myModule = require("./tutorial6-mod.js"),
    path = require("path"),
    dir = process.argv[2],
    ext = process.argv[3];
myModule(dir, ext, function (err, list) {
    if (err) return console.log(err);
    list.forEach(function(item){
        console.log(item);
    });

});

