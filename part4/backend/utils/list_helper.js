const dummy = (blogs) => {
    const numberBlogs = 1
    return numberBlogs
}

const totalLikes = (blogs) =>{
    const likes = blogs.map(blog=> blog.likes)
    let total = 0
    likes.forEach(like => total += like)
    return total
}

module.exports = {
    dummy,
    totalLikes
}