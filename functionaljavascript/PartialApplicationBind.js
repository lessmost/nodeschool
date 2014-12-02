function logger(namespace) {
    return console.log.bind(console, namespace);
}

module.exports = logger;

// var warning = logger("WARN");
// warning("This is another warning.");