var http = require("http")
    address = process.argv[2];
http.get(address, function(res){
    res.setEncoding("utf8");
    res.on("data", console.log);
    res.on("error", console.error)
    res.on()
});