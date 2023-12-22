const { User } = require("../db");
const requestValidation = require("./requestValidation");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    // requestValidation(req, res, User)

    const username = req.headers.username
    const password = req.headers.password

    const existingUser = await User.findOne({username:username, password: password})

    if(!existingUser){
         res.status(404).json({
            message: "Wrong username or password"
        })
        return
    }
    next()
}

module.exports = userMiddleware;