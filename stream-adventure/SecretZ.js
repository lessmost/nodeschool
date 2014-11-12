var crypto = require("crypto"),
    fs = require("fs"),
    zlib = require("zlib"),
    through = require("through"),
    tar = require("tar");
    
var ciperName = process.argv[2],
    ciperPass = process.argv[3];
    

var parser = tar.Parse();
function entryFn (e) {
   if (e && e.type === 'File') {
       e.pipe(crypto.createHash('md5', {encoding: 'hex'}))
        .pipe(through(null, end))
        .pipe(process.stdout);
        function end() {
            this.queue(' ' + e.path + '\n');
        }
   } 
}

parser.on('entry', entryFn);
    
process.stdin
    .pipe(crypto.createDecipher(ciperName, ciperPass))
    .pipe(zlib.createGunzip())
    .pipe(parser);