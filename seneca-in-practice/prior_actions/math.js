var plugin = function(options) {
    this.add({
        role: 'math',
        cmd: 'sum'
    }, function(msg, respond) {
        var sum = msg.left + msg.right;
        respond(null, { answer: sum });
    });
    
    this.add({
        role: 'math',
        cmd: 'sum'
    }, function(msg, respond) {
        this.prior(msg, function (err, res) {
            if (err) {
                return respond(err);
            }
            if (parseInt(msg.left || msg.right, 10)) {
                var sum = Math.floor(msg.left) + Math.floor(msg.right);
            }
            respond(null, {answer: sum});
        });
    });
};


module.exports = plugin;
