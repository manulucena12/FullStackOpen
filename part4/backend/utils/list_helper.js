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

const mostBlogs = (blogs) => {
    const blogList = blogs.map(blog => blog.blogs)
    const mostBlogged = Math.max(...blogList)
    const mostAuthor = blogs.find(blog => blog.blogs === mostBlogged)
    const result = {
        "author": mostAuthor.author,
        "blogs": mostAuthor.blogs
    }
    return result
}

const newMostLikes = (blogs) => {
    const likes = blogs.map(blog => blog.likes)
    const mostLiked = Math.max(...likes)
    const favouriteAuthor = blogs.find(blog => blog.likes === mostLiked)
    const result = {
        "author": favouriteAuthor.author,
        "likes": favouriteAuthor.likes
    }
    return result
}

module.exports = {
    dummy,
    mostBlogs,
    favouriteBlog,
    totalLikes,
    newMostLikes
}