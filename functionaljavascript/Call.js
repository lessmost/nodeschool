function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function (item) {
        return Object.prototype.hasOwnProperty.call(item, 'quack');
    }).length;
}

module.exports = duckCount;

// console.log(duckCount({'quack': 1}, Object.create({'quack': 1}), Object.create(null)));
