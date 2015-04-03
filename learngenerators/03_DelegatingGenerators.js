function *flat(arr) {
    // your code goes here
    for (var i = 0; arr && i < arr.length; i++) {
        var n = arr[i];
        if (Array.isArray(n)) {
            yield *flat(n);
        } else {
            yield n;
        }
    }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log(f);
}
// 1 2 3 4 5 6
