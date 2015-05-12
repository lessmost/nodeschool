const max = +process.argv[2];

let FizzBuzz = {
    [Symbol.iterator]() {
        let cur = 0;
        return {
            next() {
                var ret;
                cur++;
                if (cur % 15 === 0) {
                    ret = 'FizzBuzz';
                } else if (cur % 3 === 0) {
                    ret = 'Fizz';
                } else if (cur % 5 === 0) {
                    ret = 'Buzz';
                } else {
                    ret = cur;
                }
                if (cur <= max) {
                    return {value: ret, done: false};
                } else {
                    return {done: true};
                }
            }
        };
    }
};

for (var n of FizzBuzz) {
    console.log(n);
}
