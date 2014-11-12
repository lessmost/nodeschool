var http = require("http"),
    bl = require("bl");
    
var results = [],
    i,
    j,
    done = 0;

function fetch(url, index) {
    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.pipe(bl(function (error, data) {
            var str = data.toString();
            if (!error) {
                results[index] = str;
            }
            done++;
            if (done >= 3) {
                for (j = 0; j < 3; j++) {
                    console.log(results[j]);
                }
            }
        }));
    });
}
for (i = 0; i < 3; i++) {
    fetch(process.argv[i + 2], i);
}