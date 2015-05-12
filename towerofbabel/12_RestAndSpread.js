var args = process.argv[2].split(",");
args = args.map((arg) => +arg);

// write a function called `avg` here that calculates the average.
function avg(...args) {
    var sum = args.reduce((sum, n) =>  sum + n);
    return sum/args.length;
}

console.log(avg(...args));
