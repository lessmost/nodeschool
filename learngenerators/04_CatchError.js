function* upper(items) {
    // code here
    for (var i = 0; i < items.length; i++) {
        try {
            yield items[i].toUpperCase();
        } catch (e) {
            yield null;
        }
    }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
    console.log(item);
}
// want to log: A, B, null, c
