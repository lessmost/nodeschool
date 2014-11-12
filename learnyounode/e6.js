var e6Module = require("./e6Module.js"),
    i;

e6Module(process.argv[2], process.argv[3], function (error, list) {
    if (!error) {
        for (i = 0; i < list.length; i++) {
            console.log(list[i]);
        }
    }
});