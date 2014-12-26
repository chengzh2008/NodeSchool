var http = require("http");
var th2map = require("through2-map");
var server = http.createServer(function(req, res){
        if (req.method != "POST") {
            return res.end("Post request only!");
        }
        req.pipe(th2map(function(chunk){
            return chunk.toString().toUpperCase()
        })).pipe(res);
});
server.listen(process.argv[2]);