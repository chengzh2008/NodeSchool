var http = require("http");
var server = http.createServer(function(req, res){
    var url = require("url").parse(req.url, true);
    var time = new Date(url.query.iso);
    var data = {};
    data.hour = time.getHours();
    data.minute = time.getMinutes();
    data.second = time.getSeconds()

    res.writeHead(200, {"content-Type": "appliction/json"});
    if (/^\/api\/parsetime/.test(req.url)) {
        res.end(JSON.stringify(data));
    } else if (/^\/api\/unixtime/.test(req.url)) {
        res.end(JSON.stringify({unixtime: time.getTime()}));
    }
});
server.listen(Number(process.argv[2]));