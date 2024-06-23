const express = require('express');
const Blog = require('../modules/blog');
const mongoose = require('mongoose');
const blogRouter = express.Router();
const User = require('../modules/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bodyParser = require('body-parser');
const getToken = require('../middlewares/getToken');
const getUser = require('../middlewares/getUser');

blogRouter.use(bodyParser.json())
blogRouter.get('/', (request, response) => {
    Blog.find({})
      .populate('user', { username: 1, name: 1 }) 
      .then(blogs => {
        response.json(blogs);
      });
});

blogRouter.post('/', getToken, getUser, async (request, response) => {
  try{
    const newBlog = new Blog({
      author: request.body.author,
      username: request.body.username,
      likes: request.body.likes,
      title: request.body.title, 
      url: request.body.url, 
      user: request.userId
    })
    const savedBlog = await newBlog.save()
    const user = request.user
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.status(201).json(savedBlog)
    }
  catch(error){
      console.log(error)
      response.status(500).json({error: 'Something went wrong'})
  }
});

blogRouter.delete('/:id', getToken, getUser, async (req, res) => { 
  try {
    const blogToEliminate = await Blog.findById(req.params.id)
    if (!blogToEliminate) {
      res.status(404).json({ error: 'Blog not found' })
    }
    const sameUser = blogToEliminate.user.toString() === req.userId
    if (!sameUser){
      return res.status(401).json({ error: 'Unauthorized' })
    }
    await Blog.findByIdAndDelete(req.params.id);
    const userToUpdate = req.user
    userToUpdate.blogs = userToUpdate.blogs.filter(blog => blog.toString() !== blogToEliminate._id.toString())
    await userToUpdate.save()
    res.status(204).json({ status: 'Eliminated' })
  }catch (error) {
    console.error(error);
    res.status(500).json({error: 'Something went wrong'})
  }
});

blogRouter.put('/likes/:id', async (req, res) => {
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
