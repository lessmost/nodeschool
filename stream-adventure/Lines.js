var split = require("split"),
    through = require("through");

var cnt  = 0;
process.stdin.
    pipe(split())
    .pipe(through(function (buf) {
        if (cnt % 2 === 0) {
            this.queue(buf.toString().toLowerCase() + "\n");
        } else {
            this.queue(buf.toString().toUpperCase() + "\n");
        }
        cnt++;
    })).pipe(process.stdout);