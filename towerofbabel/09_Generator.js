let FizzBuzz = function*() {
    let cur = 0;
    let ret;
    while (cur < +process.argv[2]) {
        cur++;
        if (cur % 15 === 0) {
            ret = 'FizzBuzz';
        }
        else if (cur % 3 === 0) {
            ret = 'Fizz';
        }
        else if (cur % 5 === 0) {
            ret = 'Buzz';
        }
        else {
            ret = cur;
        }
        yield ret;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}
