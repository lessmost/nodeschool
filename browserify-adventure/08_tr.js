var through = require("through2"),
    split = require("split"),
    combine = require("stream-combiner2"),
    quote = require("quote-stream"),
    sprintf = require("sprintf");

module.exports = function (file) {
    var cnt = 0,
        prefix = through();
    if (!/\.txt$/.test(file)) {
        return through();
    }
    
    // need to add prefix to interface with module system and be valid javascript
    prefix.write('module.exports = ');
    
    function transformFn (chunk, enc, cb) {
        var b;
        if (cnt % 5 === 0) {
            b = sprintf("%3d %s\n", cnt, chunk);
        } else {
            b = '    ' + chunk + '\n';
        }
        this.push(b);
        cnt++;
        cb();
    }
    
    
    
    return combine(split(), through(transformFn), quote(), prefix);
};