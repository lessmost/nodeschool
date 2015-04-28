var bindings = require("bindings");
var addon = bindings("myaddon");

//addon.print(process.argv[2]);
console.log(addon.length(process.argv[2]));