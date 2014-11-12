var spawn = require("child_process").spawn,
    duplexer = require("duplexer");

module.exports = function (cmd, args) {
    var proc = spawn(cmd, args);
    return duplexer(proc.stdin, proc.stdout);
};