const {User} = require("../db/index")
const jwt = require("jsonwebtoken")
const dotevn = require("dotenv")
dotevn.config()

const jwtPassword = process.env.JWT_PASSWORD;

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
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

const userLoginMiddleware = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username, password: req.body.password})

    if(!user){
        return res.status(404).json({
            message: "User not found! Wrong username or password"
        })
    }
    next()
}


module.exports = {userMiddleware, userLoginMiddleware};