const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    username: String,
    author: String,
    url: String,
    likes: Number,
    comments: Array,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
  
const Blog = mongoose.model('Blog', blogSchema)

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = Blog