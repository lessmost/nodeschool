function Reduce(arr, fn, initial, idx) {
    idx = idx || 0;
    if (idx === arr.length - 1) {
        // last element
        return fn(initial, arr[idx], idx, arr);
    } else {
        initial = fn(initial, arr[idx], idx, arr);
        idx++;
        return Reduce(arr, fn, initial, idx);
    }
}

module.exports = Reduce;

// var ret = Reduce([1, 2, 3], function (prev, cur, index, arr) {
//     return prev + cur;
// }, 0);
// console.log(ret);
