module.exports = function (dir, ext, callback) {
    var fs = require("fs"),
        path = require("path");
        
    fs.readdir(dir, function (error, list) {
        var i,
            ret = [];
        if (error) {
            callback(error);
        } else {
            for (i = 0; i < list.length; i++) {
                if (path.extname(list[i]) === '.' + ext) {
                    ret.push(list[i]);
                }
            }
            callback(null, ret);
        }
    })
};