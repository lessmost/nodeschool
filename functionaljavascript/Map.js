function doubleAll(numbers) {
    var results = [];
    
    numbers.map(function (n) {
       results.push(n * 2); 
    });
    
    return results;
}

module.exports = doubleAll;