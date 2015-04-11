var _ = require('lodash');

var worker = function (collection) {
    var results = {
        hot: [],
        warm: []
    };

    var testFn = function (temp) {
        return temp > 19;
    };

    _.forEach(collection, function (temps, city) {
        if (_.every(temps, testFn)) {
            results.hot.push(city);
        } else if (_.some(temps, testFn)) {
            results.warm.push(city);
        }
    });

    return results;
};

module.exports = worker;

