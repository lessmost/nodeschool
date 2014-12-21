var level = require("level"),
    sub = require("level-sublevel");


var db = sub(level(process.argv[2]));

var robots = db.sublevel('robots');
var dinosaurs = db.sublevel('dinosaurs');

robots.put('slogan', 'beep boop');
dinosaurs.put('slogan', 'rawr');