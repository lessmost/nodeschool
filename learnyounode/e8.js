var http = require("http"),
    bl = require("bl");

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function (error, data) {
        var str = data.toString();
        if (!error) {
            console.log(str.length);
            console.log(str);
        }
    }));
});