var duplexer = require("duplexer"),
    stream = require("stream");
    

module.exports = function (counter) {
    var readStream = counter,
        writeStream,
        counts = {};
    
    writeStream = new stream.Writable({objectMode: true});
    writeStream._write = function (chunk, encoding, callback) {
        if (counts[chunk.country]) {
            counts[chunk.country] = counts[chunk.country] + 1;
        } else {
            counts[chunk.country] = 1;
        }
        
        callback();
    };
    writeStream.on('finish', function () {
        counter.setCounts(counts);
    });
        
    return duplexer(writeStream, readStream);
}