const express = require('express');
const Blog = require('../modules/blog');
const mongoose = require('mongoose');
const blogRouter = express.Router();
const User = require('../modules/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bodyParser = require('body-parser')
blogRouter.use(bodyParser.json())
blogRouter.get('/', (request, response) => {
    Blog.find({})
      .populate('user', { username: 1, name: 1 }) 
      .then(blogs => {
        response.json(blogs);
      });
  });
blogRouter.post('/', async (request, response) => {
  let token = null
  const authorization = request.get('authorization')
  if(authorization && authorization.toLowerCase().startsWith('bearer')){
    token = authorization.substring(7)
    let decodedToken = jwt.verify(token, process.env.SECRET_WORD)
    if(!decodedToken.id){
      res.status(401).json({error: 'Unauthorized'})
    }else{
      const user = await User.findById(request.body.userId)
      if(!user){
      response.status(400).send({error: 'Incorrect ID'})
      }else{
      try{
          const newBlog = new Blog({
              author: request.body.author,
              likes: request.body.likes,
              title: request.body.title, 
              url: request.body.url, 
              user: user._id
          })
          const savedBlog = await newBlog.save()
          user.blogs = user.blogs.concat(savedBlog._id)
          await user.save()
          response.status(201).json({Status: 'Blog created succesfully'})
      }
      catch(error){
          console.log(error)
          response.status(500).json({error: 'Something went wrong'})
      }
    }
  }
  }else{
    res.status(401).json({error: 'Unauthorized'})
  }
});

blogRouter.delete('/:id', (req, res) => {
  Blog.findByIdAndDelete(req.params.id).then(result => {
    res.status(204).end();
  });
});

blogRouter.put('/:id', async (req, res) => {
  const { id } = req.params;

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

module.exports = blogRouter;
