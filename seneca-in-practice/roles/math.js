var plugin = function(options) {
    this.add({
        role: 'math',
        cmd: 'sum'
    }, function(msg, respond) {
        var sum = parseInt(msg.left) + parseInt(msg.right);
        respond(null, { answer: sum });
    });
    
    this.add({
        role: 'math',
        cmd: 'product'
    }, function(msg, respond) {
        var ret = parseInt(msg.left) * parseInt(msg.right);
        respond(null, { answer: ret });
    });
};


module.exports = plugin;
