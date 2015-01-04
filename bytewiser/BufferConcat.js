var bufs = [];
process.stdin.on('data', function (buf) {
    bufs.push(buf);
});
process.stdin.on('end', function () {
    console.log(Buffer.concat(bufs));
})