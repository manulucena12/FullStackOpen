const testingRouter = require('express').Router()
const Blog = require('../modules/blog')
const User = require('../modules/users')

testingRouter.post('/', async (req,res)=>{
    await Blog.deleteMany({})
    await User.deleteMany({})

    res.status(204).json({status: 'Eliminated'})
    console.log('Database cleaned')
})

testingRouter.get('/', (req,res)=>{
    res.json({error: 'HI'})
})

module.exports = testingRouter