function* factorial(n) {
    var cur = 1,
        i;
    for (i = 1; i <= n; i++) {
        cur = cur * i;
        yield cur;
    }
}

for (var n of factorial(5)) {
    console.log(n);
}
