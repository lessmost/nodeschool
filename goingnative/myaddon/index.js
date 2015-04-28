var bindings = require("bindings");
var addon = bindings("myaddon");

//addon.print(process.argv[2]);
//console.log(addon.length(process.argv[2]));
addon.delay(process.argv[2], function () {
    console.log('Done!');
});