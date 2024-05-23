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

app.delete('/api/blogs/:id', (req,res)=>{
  Blog.findByIdAndDelete(req.params.id)
  .then(result=>{
    res.status(204).end()
  })
})

app.put('/api/blogs/:id', async (req, res) => {
  const { id } = req.params;

  // Verifica si el ID es un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'malformatted id' });
  }

  try {
    const getBlog = await Blog.findById(id);
    if (!getBlog) {
      return res.status(404).json({ error: 'blog not found' });
    }

    const updatedBlog = {
      author: req.body.author || getBlog.author,
      blogs: req.body.blogs || getBlog.blogs,
      likes: (req.body.likes !== undefined) ? req.body.likes + 1 : getBlog.likes + 1,
      title: req.body.title || getBlog.title,
      url: req.body.url || getBlog.url
    };

    const result = await Blog.findByIdAndUpdate(id, updatedBlog, { new: true, runValidators: true });
    res.json(result);

  } catch (error) {
    res.status(500).json({ error: 'something went wrong' });
  }
});


const PORT = process.env.PORT

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = {app, server}