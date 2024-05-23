const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./modules/blog')
require('dotenv').config();
const {MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV} = process.env
const mongoUrl = NODE_ENV === 'test'
? MONGO_DB_URI_TEST
: MONGO_DB_URI
mongoose.connect(mongoUrl)
.then(()=>{
  console.log('Sucessful connection')
})

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  if(!request.body.title || !request.body.url){
    response.status(400).end()
  }else{
    blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
  }
})

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = {app, server}