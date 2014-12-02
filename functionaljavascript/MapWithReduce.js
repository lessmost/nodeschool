function arrayMap(arr, fn) {
    // Implement Array map with Array Reduce
    return arr.reduce(function (prev, cur, idx, arr) {
        return prev.concat(fn(cur, idx, arr));
    },  []);
}

module.exports = arrayMap;

// var arr = [1, 2, 3];
// console.log(arrayMap(arr, function (item) {
//     return item * 2;
// }));