var plugin = function(options) {
    this.add({
        role: 'math',
        cmd: 'sum'
    }, function(msg, respond) {
        var sum = parseFloat(msg.left) + parseFloat(msg.right);
        respond(null, { answer: sum });
    });
    
    this.add({
        role: 'math',
        cmd: 'sum'
    }, function(msg, respond) {
        var left = parseFloat(msg.left);
        var right = parseFloat(msg.right);
        
        if (Number.isFinite(left) && Number.isFinite) {
            this.prior(msg, respond);
        } else {
            respond(new Error('Expected left and right to be numbers.'));
        }
    });
    
    this.add({
        role: 'math',
        cmd: 'sum',
        integer: true
    }, function(msg, respond) {
        var ret = Math.floor(parseFloat(msg.left)) + Math.floor(parseFloat(msg.right));
        respond(null, { answer: ret });
    });
};


module.exports = plugin;
