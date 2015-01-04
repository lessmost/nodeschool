var arr = process.argv.slice(2);
var buf = new Buffer(arr);

console.log(buf.toString('hex'));