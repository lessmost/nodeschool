function repeat(operations, num) {
    if (num <= 0) {
        return;
    }
    operations();
    if (num % 10 === 0) {
    window.setTimeout(function() {
        repeat(operations, num - 1);
    });
    } else {
        repeat(operations, num - 1);
    }
}

module.exports = repeat;