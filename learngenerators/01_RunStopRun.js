function* range(from, to) {
    var i = from;
    while (i <= to) {
        yield i++;
    }
}

for (var i of range(5, 10)) {
    console.log(i);
}
