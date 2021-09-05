const bcrypt = require('bcryptjs');
const {v4: uuid} = require('uuid');
const User = require('../models/userModel')

async function createUser(req, res) {
    const {fullName, age, username, password, role} = req.body;
    const checkUser = await User.findUser(username);
    if (checkUser) 
        res.status(400).send({ message: `${username} already exists` })
    else {
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = {
            id: uuid(),
            fullName,
            age,
            username,
            password: hashedPassword,
            role
        }

        await User.createUser(newUser);
        res.send({
            message: "User has been created"
        })
    }
}   

module.exports = {
    createUser
}