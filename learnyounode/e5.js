var fs = require("fs"),
    path = require("path");

fs.readdir(process.argv[2], function (error, list) {
    var i;
    if (!error) {
        for (i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === '.' + process.argv[3]) {
                console.log(list[i]);
            }
        }
    }
});