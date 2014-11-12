var through = require("through"),
    tr;

function write(stream) {
    this.queue(stream.toString().toUpperCase());
}

tr = through(write);

process.stdin.pipe(tr).pipe(process.stdout);

