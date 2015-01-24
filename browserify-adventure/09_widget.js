var EventEmitter = require("events").EventEmitter;
var inherits = require("inherits");
var domify = require("domify");
var fs = require("fs");
var path = require("path");
var insertCss = require("insert-css");

module.exports = Widget;
inherits(Widget, EventEmitter);

function Widget () {
    var me = this;
    if (!(this instanceof Widget)) {
        return new Widget();
    }
    var html = fs.readFileSync(__dirname + "/09_form.html", 'utf8');
    me.cssText = fs.readFileSync(__dirname + "/09_form.css", 'utf8');
    me.elements = domify(html);
    me.elements.addEventListener('submit', function (ev) {
        var msg = me.elements.querySelector('.send textarea').value;
        ev.preventDefault();
        me.emit("message", msg);
    });
}

Widget.prototype.appendTo = function (target) {
    insertCss(this.cssText);
    target.appendChild(this.elements);
};

