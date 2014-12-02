function getDenpendencies(tree) {
    var rtn = [],
        key;
    if (tree) {
        for (key in tree) {
            rtn.push(key + '@' + tree[key].version);
            if (tree[key].dependencies) {
                rtn = rtn.concat(getDenpendencies(tree[key].dependencies));
            }
        }
        return rtn;
    } else {
        return rtn;
    }
}

module.exports = function (tree) {
    var arr = getDenpendencies(tree.dependencies);
    arr = arr.reduce(function (prev, cur, idx) {
        if (prev.indexOf(cur) < 0) {
            prev.push(cur);
        }
        return prev;
    }, []);
    arr.sort();
    return arr;
};

// var loremIpsum = {
//     "name": "lorem-ipsum",
//     "version": "0.1.1",
//     "dependencies": {
//         "optimist": {
//             "version": "0.3.7",
//             "dependencies": {
//                 "wordwrap": {
//                     "version": "0.0.2"
//                 }
//             }
//         },
//         "inflection": {
//             "version": "1.2.6"
//         }
//     }
// };
    
// var arr = module.exports(loremIpsum);
// console.log(arr);
    