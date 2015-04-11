var _ = require('lodash');

var worker = function (collection) {
    var results = [];
    var userGroup = _.groupBy(collection, 'username');

    _.forEach(userGroup, function (comments, user) {
        results.push({
            username: user,
            comment_count: _.size(comments)
        });
    });

    return _.sortBy(results, 'comment_count').reverse();
};

module.exports = worker;

