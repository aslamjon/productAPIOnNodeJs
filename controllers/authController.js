const jwt = require("jsonwebtoken");

const User = require("../models/authModel");

async function login(req, res) {
    const secret = "secret";
    const { username, password } = req.body;
    
    try {
        const user = await User.findUser(username);
        
        if (!user) {
            res.status(400).send({ message: "Login is incorrect" });
        }

        const isMatch = password === user.password;
        if (!isMatch) {
            res.status(400).send({ message: "Password is incorrect" });
        }

        const token = jwt.sign({ userId: user.id, username: username }, secret, {
            expiresIn: "1d",
        });
        /* secret - secret for virify
            expiresIn: "1d"  - token live 1 day. 
        */ 
        res.status(200).send({
            token: token,
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    login,
};

// 1. Find User by username
// 2. if it exists, compare password with database
// 3. if comparison is successfull, access granted and generate jwt
