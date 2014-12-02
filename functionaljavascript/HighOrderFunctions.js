function repeat (fn, num) {
    var i;
    for (i = 0; i < num; i++) {
        fn();
    }
}

module.exports = repeat;