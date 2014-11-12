var concat = require("concat-stream");

process.stdin.pipe(concat(function (data) {
    var str,
        i,
        ret = '';
    if (data) {
        str = data.toString();
        for (i = 0; i < str.length; i++) {
            ret = str[i] + ret;
        }
        process.stdout.write(ret);
    }
}));