const userRouter = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../modules/users')
userRouter.post('/', async (req,res)=>{
    try{
        if(req.body.password.length < 3 || req.body.username.length <3){
            res.status(400).json({error: 'Username and Password must be 3 characters minimum length'})
        }else{
            const passwordHash = await bcrypt.hash(req.body.password, 10)
            const newUser = new User({
                name: req.body.name,
                username: req.body.username,
                passwordHash
            })
            await newUser.save()
            res.status(201).json({
                Status: 'Created',
                User: req.body.username
            })
        }
    }
    catch(error){
        res.status(500).json({error: 'Something went wrong'})
    }
}) 

userRouter.get('/', (req,res)=>{
    User.find({}).populate('blogs', { author: 1, title: 1, url: 1 })
    .then(users=>{
        res.json(users)
    })
})

module.exports = userRouter