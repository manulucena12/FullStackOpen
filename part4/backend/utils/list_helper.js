const dummy = (blogs) => {
    const numberBlogs = 1
    return numberBlogs
}

const totalLikes = (blogs) => {
    const likes = blogs.map(blog=> blog.likes)
    let total = 0
    likes.forEach(like => total += like)
    return total
}

const favouriteBlog = (blogs) => {
    const likes = blogs.map(blog => blog.likes)
    const mostLiked = Math.max(...likes)
    const popularBlog = blogs.find(blog => blog.likes === mostLiked)
    return popularBlog
}

module.exports = {
    dummy,
    favouriteBlog,
    totalLikes
}