var _ = require('lodash');

var worker = function (arr) {
    return _.where(arr, {
        'active': true
    });
};

module.exports = worker;

