function countWords(inputWords) {
    return inputWords.reduce(function (rtn, word){
        if (rtn[word]) {
            rtn[word] += 1;
        } else {
            rtn[word] = 1;
        }
        return rtn;
    }, {});
}

module.exports = countWords;

// var words = ["hello", "world", "hello"];

// console.log(countWords(words));