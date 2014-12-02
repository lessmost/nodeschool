function Spy(target, method) {
    var rtn = {count: 0};
    var oldFn = target[method];
    target[method] = function () {
        rtn.count++;
        return oldFn.apply(target, arguments)
    }
    return rtn;
}

module.exports = Spy;

// var spy = Spy(console, 'error')
// console.error("Calling console.error.");
// console.error("Calling console.error.");
// console.error("Calling console.error.");

// console.log(spy.count);
