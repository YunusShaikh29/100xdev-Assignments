// Middleware for handling auth

const { Admin } = require("../db");
const requestValidation = require("./requestValidation");


async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username
    const password = req.headers.password

    const existingUser = await Admin.findOne({username:username, password: password})

    if(!existingUser){
         res.status(404).json({
            message: "Wrong username or password"
        })
        return
    }

    // requestValidation(req, res, Admin)

    next()
}

module.exports = adminMiddleware;