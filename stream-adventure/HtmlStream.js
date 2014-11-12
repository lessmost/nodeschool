var trumpet = require("trumpet"),
    through = require("through"),
    tr = trumpet(),
    stream;

process.stdin.pipe(tr);
stream = tr.select('.loud').createStream();

stream.pipe(through(function (buf) {
    this.queue(buf.toString().toUpperCase());
})).pipe(stream);

tr.pipe(process.stdout);