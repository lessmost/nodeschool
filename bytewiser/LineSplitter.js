var fs = require("fs");

fs.readFile(process.argv[2], function (err, data) {
    if (err) {
        throw err;
    }
    // console.log(data.toString());
    // console.log('-----');
    var len = data.length,
        i, j;
    j = 0;
    for (i = 0; i < len; i++) {
        if (data[i] === 10) {
            console.log(data.slice(j, i));
            j = i + 1;
        }
    }
    if (j < len) {
        console.log(data.slice(j));
    }
});