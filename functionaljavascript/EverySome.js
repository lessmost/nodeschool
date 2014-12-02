function checkUserValid(goodUsers) {
    return function (submitUsers) {
        return submitUsers.every(function (submitUser) { // check every submit user
            return goodUsers.some(function (goodUser) { // one of good user matches the submit user
                return goodUser.id === submitUser.id;
            });
        })
    };
}

module.exports = checkUserValid;