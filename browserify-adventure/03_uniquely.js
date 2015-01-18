module.exports = function (str) {
    var uniq = require('uniq');
    return uniq(str.split(','));
};
