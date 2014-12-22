var http = require("http"),
    bl = require("bl"),

    q = [],
    count = 0;

// this function is very import the async behaviour, the callback function
// can have the right index
function httpGet(index) {
    http.get(process.argv[2+index], function(res) {
        res.pipe(bl(function(err, data) {
            if (err) {
                return console.error(err);
            }
            q[index] = data.toString();
            count++;
            if (count ==3) {
                printResults();
            }
        }));
    });
}

function printResults() {
    for (var i = 0; i< 3; i++) {
        console.log(q[i]);
    }

}

for (var i = 0; i< 3; i++) {
    httpGet(i);
}







