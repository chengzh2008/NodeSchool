function loadUsers(userIds, load, done) {
    var loadUserCount = 0;
    var users = [];
    userIds.forEach(function(userId, index) {
        load(userId, function(user){
            users[index] = user;
            if (++loadUserCount === userIds.length) return done(users);
        });
    });
}

module.exports = loadUsers