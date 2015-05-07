var test = require("tape");
var feedCat = require(process.argv[2]);

test('feedCat', function (t) {
    t.plan(2);
    t.equal(feedCat('food'), 'yum');
    t.throws(feedCat.bind(null, 'chocolate'));
});
