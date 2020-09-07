// find all the users that have not been linked

const {allUsers, linked} = require('./users')

function unlinkedUsers(allUsers, linked) {
    return allUsers.filter((user) => {
        return !linked.find(linkedUser => {
            return linkedUser.id === user.id;
        })
    })
};

let unlinkedUsersArray = unlinkedUsers(allUsers, linked);
console.log(unlinkedUsersArray)
