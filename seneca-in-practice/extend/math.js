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
        cmd: 'sum',
        integer: true
    }, function(msg, respond) {
        var ret = Math.floor(parseInt(msg.left)) + Math.floor(parseInt(msg.right));
        respond(null, { answer: ret });
    });
};


module.exports = plugin;
