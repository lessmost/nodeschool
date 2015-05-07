var repeatCallback = require(process.argv[2]);
var test = require('tape');

test('repeatCallback', function (t) {
    t.plan(5);
    repeatCallback(5, function () {
        t.pass("callback");
    });
});
