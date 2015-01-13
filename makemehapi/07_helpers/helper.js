module.exports = function (context) {
    //console.log(context);
    return context.data.root.query.name + context.data.root.query.suffix;
};