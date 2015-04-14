var _ = require('lodash');

var worker = function (arr) {
    var results = [];

    _.reduce(arr, function (results, item) {
        var article = item.article;
        var accumItem = _.where(results, {'article': article});
        if (accumItem.length) {
            accumItem[0].total_orders += item.quantity;
        } else {
            results.push({
                article: article,
                total_orders: item.quantity
            });
        }

        return results;
    }, results);

    return _.sortBy(results, function (item) {
        return -item.total_orders;
    });
};

module.exports = worker;

