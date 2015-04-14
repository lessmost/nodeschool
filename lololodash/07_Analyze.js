var _ = require('lodash');

var worker = function (collection) {
    var sum, cnt, avg;
    var results = {};

    sum = _.reduce(collection, function (sum, item) {
        return sum + item.income;
    }, 0);
    cnt = _.size(collection);
    avg = sum / cnt;

    results.average = avg;

    results.underperform = _.filter(collection, function (item) {
        return item.income <= avg;
    });
    results.underperform = _.sortBy(results.underperform, function (item) {
        return item.income;
    });

    results.overperform = _.filter(collection, function (item) {
        return item.income > avg;
    });
    results.overperform = _.sortBy(results.overperform, function (item) {
        return item.income;
    });

    return results;
};

module.exports = worker;

