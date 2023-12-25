// Middleware for handling auth
const {Admin} = require('../db/index')
const jwt = require("jsonwebtoken")
const dotevn = require("dotenv")
dotevn.config()

const jwtPassword = process.env.JWT_PASSWORD;

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Missing token' });
      }

    jwt.verify(token, jwtPassword, (err, decode) => {
        if(err){
             return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }
    })

    next()
}

async function adminLoginMiddleWare(req, res, next){
    const admin = await Admin.findOne({username: req.body.username, password: req.body.password})

    if(!admin){
        return res.status(404).json({
            message: "Admin not found! Wrong username or password"
        })
    }
    next()
}

module.exports = {adminMiddleware, adminLoginMiddleWare};