const loginRouter = require('express').Router()
const User = require('../modules/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();
loginRouter.post('/', async (req,res)=>{
    try{
        const loggedUser = await User.findOne({username: req.body.username})
        if(!loggedUser){
        }else{
            let token = null
            const correctPassword = await bcrypt.compare(req.body.password, loggedUser.passwordHash)
            if(!correctPassword){
                res.status(400).json({error: 'User or password incorrect'})
            }else{
                const userToken = {
                    username: req.body.username,
                    id: loggedUser._id
                }
                token = jwt.sign(userToken, process.env.SECRET_WORD)
                res.status(302).json(token)
            }
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: 'Something went wrong'})
    }
})

module.exports = loginRouter