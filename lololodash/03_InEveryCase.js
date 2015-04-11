var _ = require('lodash');

var worker = function (collection) {
    return _.forEach(collection, function (item) {
        if (item.population >= 1) {
            item.size = 'big';
        } else if (item.population >= 0.5) {
            item.size = 'med';
        } else {
            item.size = 'small';
        }
    });
};

module.exports = worker;

