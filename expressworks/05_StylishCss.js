var express = require("express");

var app = express();
app.use(express.statc(process.argv[3]));
app.use(require("stylus").middleware(process.argv[3]));

app.listen(process.argv[2]);