var seneca = require('seneca')();

seneca.add({
    role: 'math',
    cmd: 'sum'
}, function (msg, respond) {
    var sum = msg.left + msg.right;
    console.log(msg);
    respond(null, {answer: sum});
});

module.exports = seneca;
