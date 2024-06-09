import { useState } from "react"
import { postBlogService } from "../services/createBlog"
export const Blogs = ({blogs, user, setUser, token, setBlogs}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleAuthor = (event) => {
        setAuthor(event.target.value)
    }
    const logOut = () => {
        setUser(null)
        window.localStorage.removeItem('loggedBlogAppUser')
    }
    const handleBlog = async (event) => {
        event.preventDefault()
        const newBlog = {
            title,
            author
        }
        try {
            const blogged = await postBlogService(newBlog, token)
            setBlogs([...blogs, blogged])
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <>
            <h1>Welcome @{user.username} </h1>
            <button onClick={logOut}>LogOut</button>
            <h2>Add some new blog!</h2>
            <form onSubmit={handleBlog}>
                <input type="text" value={title} placeholder="Title" onChange={handleTitle}></input>
                <p></p>
                <input type="text" value={author} placeholder="Author" onChange={handleAuthor}></input>
                <p></p>
                <button>Create Blog</button>
            </form>
            <ul>
            {blogs.map((blog) => (
                <li key={blog.id}>Title: {blog.title} Author: {blog.author}</li>
            ))}
            </ul>
        </>
    )
}