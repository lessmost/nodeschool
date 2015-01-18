module.exports = {
    parse: function (str) {
        var ret = [];
        str.split('\n').forEach(function (line) {
            var o = JSON.parse(line);
            ret.push(o);
        });

        return ret;
    },

    stringify: function (rows) {
        var lines = [];
        rows.forEach(function (row) {
            lines.push(JSON.stringify(row));
        });

        return lines.join('\n');
    }
};
