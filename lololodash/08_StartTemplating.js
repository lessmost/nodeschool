var _ = require('lodash');

var worker = function (obj) {
    var compiled = _.template('Hello <%= user.name %> (logins: <%= _.size(user.login) %>)');

    return compiled({user: obj});
};

module.exports = worker;

