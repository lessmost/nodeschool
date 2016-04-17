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
        cmd: 'product'
    }, function(msg, respond) {
        var ret = msg.left * msg.right;
        respond(null, { answer: ret });
    });
    
    this.wrap({
        role: 'math'
    }, function (msg, respond) {
        msg.left = parseFloat(msg.left);
        msg.right = parseFloat(msg.right);
        this.prior(msg, respond);
    });
};


module.exports = plugin;
