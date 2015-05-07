var test = require("tape");
var fancify = require(process.argv[2]);

test('fancify', function (t) {
    t.equal(fancify('Hello'), '~*~Hello~*~', 'TAP');
    t.equal(fancify('Hello', true), '~*~HELLO~*~', 'TAP');
    t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'TAP');
    t.end();
});
