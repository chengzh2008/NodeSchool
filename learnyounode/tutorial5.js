var fs = require("fs");
	path = require("path");
	dir = process.argv[2];
	ext = "." + process.argv[3];
fs.readdir(dir, function(err, list){
	for (var i = 0; i< list.length; i++) {
		if (path.extname(list[i]) === ext) {
			console.log(list[i]);
		}
	}


});

