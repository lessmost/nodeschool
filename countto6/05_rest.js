module.exports = function average(...args) {
    var sum = args.reduce(function (cur, i) {
        return cur + i;
    });
    return sum / args.length;
};

