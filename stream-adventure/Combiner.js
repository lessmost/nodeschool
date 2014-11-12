var combine = require("stream-combiner"),
    split = require("split"),
    zlib = require("zlib"),
    through = require("through");

function write(str) {
    if (!str || str.length <= 0) {
        return;
    }
    var item = JSON.parse(str),
        type = item.type,
        name = item.name;
    if (type === 'genre') {
        if (cur) {
            this.queue(JSON.stringify(cur));
            this.queue('\n');
        }
        cur = {
            'name': name,
            'books': []
        };
    } else if (type === 'book' && cur) {
        cur.books.push(name);
    }
}

function end() {
    if (cur) {
        this.queue(JSON.stringify(cur));
        this.queue('\n');
    }
    this.queue(null);
}

var cur;

module.exports = function () {
    return combine(split(), through(write, end), zlib.createGzip());
}
