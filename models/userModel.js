const User = require('../data/users.json');
const { writeData } = require('../utils');

async function findUser(username) {
    return new Promise((resolve, reject) => {
        const user = User.find(e => e.username === username)
        resolve(user)
    })
}

async function createUser(user) {
    return new Promise((resolve, reject) => {
        User.push(user);
        writeData('./data/users.json', User);
        resolve(user);
    })
}


module.exports = {
    findUser,
    createUser
}