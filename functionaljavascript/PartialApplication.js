var slice = Array.prototype.slice;

function logger(namespace) {
    return function() {
        var argv = slice.call(arguments);
        console.log.apply(null, [namespace].concat(argv));
    }
    
}

module.exports = logger;

// var warning = logger("WARN");
// warning("This is a warning.");