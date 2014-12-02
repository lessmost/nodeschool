function loadUsers(userIds, load, done) {
    var users = [],
        cnt = 0;
    userIds.forEach(function (userId, idx) {
        load(userId, function (user) {
            cnt++;
            users[idx] = user;
            if (cnt >= userIds.length) {
                done(users);
            }
        })
    });
}

module.exports = loadUsers;