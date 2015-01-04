process.stdin.on('data', function (buf) {
    var arr = new Uint8Array(buf.length);
    for (var i = 0; i < buf.length; i++) {
        arr[i] = buf.readUInt8(i);
    }
    console.log(JSON.stringify(arr));
});