function repeat(operation, num) {
    return function () {
        if (num <= 0) {
            return;
        }
        operation();
        return repeat(operation, num - 1);
    }
}

function trampoline(fn) {
    while (fn && typeof fn === 'function') {
        fn = fn();
    }
}

module.exports = function (operation, num) {
    trampoline(function () {
        return repeat(operation, num);
    });
}

// var count = 0;

// repeat(function () {
//     count++;
// }, 100000);