function curryN(fn, n) {
    // implement goes here
    if (n === undefined) {
        n = fn.length;
    }
    
    return getCurryN(fn, n);
}

function getCurryN(fn, n, args) {
    if (n < 1) {
        return fn.apply(null, args);
    } else {
        return function () {
            return getCurryN(fn, n - 1, args ? args.concat(arguments[0]) : [arguments[0]]);
        }
    }
}

module.exports = curryN;

// function addThree(one, two, three) {
//     return one + two + three;
// }

// var curryC = curryN(addThree),
//     curryB = curryC(1),
//     curryA = curryB(2);
    
// console.log(curryA(3));
// console.log(curryA(10));
// console.log(curryN(addThree)(1)(2)(3));