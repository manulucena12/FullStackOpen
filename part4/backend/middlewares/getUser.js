const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../modules/users')
module.exports = async (req,res,next) => {
    const user = await User.findById(req.userId)
    if(!user){
        res.status(400).json({error: 'Incorrect user'})
    }
    req.user = user
    next()
}