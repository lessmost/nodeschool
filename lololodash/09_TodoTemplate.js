var _ = require('lodash');

function isUrgent(todo) {
    var d = new Date(todo.date),
        now = new Date();
    return d - now < 2 * 24 * 60 * 60 * 1000;
}

var worker = function (todos) {
    var compiled = _.template('<ul>\n' +
                             '<% _.forEach(todos, function (items, user) { %>' +
                                '<li><%= user %>\n' +
                                '<ul><% _.forEach(items, function (item) { %>' +
                                    '<li><% if (isUrgent(item)) { %><b>URGENT</b> <% } %><%= item.todo %></li>\n' +
                                '<% }); %>' +
                                '</ul>\n' +
                                '</li>\n' +
                             '<% }); %>' +
                             '</ul>', {
                                 'imports': {
                                     'isUrgent': isUrgent
                                 }
                             });

    _.forEach(todos, function (items, user) {
        todos[user] = _.sortBy(items, 'date');
    });
    var ret = compiled({
        'todos': todos
    });

    console.log(ret);
    return ret;
};

module.exports = worker;

