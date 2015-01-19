var fs = require("fs");
var sprintf = require("sprintf");
var src = fs.readFileSync(__dirname + '/wake.txt', 'utf8');

var lines = src && src.split('\n');
lines.forEach(function (line, idx) {
    var str;
    if (idx % 5 === 0) {
        str = sprintf.sprintf('%3d %s', idx, line);
    } else {
        str = sprintf.sprintf('    %s', line);
    }
    console.log(str);
});