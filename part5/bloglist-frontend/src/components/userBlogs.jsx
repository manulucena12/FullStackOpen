import { deleteBlogService } from "../services/deleteBlog"
import { increaseLikesService } from "../services/increaseLikes"
import { Togglable } from "./togglable"

export const Blogs = ({blogs, user, setUser, setBlogs, token}) => {
    const logOut = () => {
        setUser(null)
        window.localStorage.removeItem('loggedBlogAppUser')
    }
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 90,
        border: 'solid',
        borderWidth: 6,
        marginBottom: 7
    }
    const increaseLikes = async (id) => {
        const updatedBlog = await increaseLikesService(id)
        setBlogs(blogs.map(blog =>
            blog.id === id ? { ...blog, likes: updatedBlog.likes } : blog
        ))
    }
    const deleteBlog = async (id) =>{
        const blogToEliminate = blogs.find(blog => blog.id === id)
        if(window.confirm(`Do you want to eliminate the blog ${blogToEliminate.title} by ${blogToEliminate.author}?`)){
            await deleteBlogService(id, token)
            setBlogs(blogs.filter(blog => blog.id !== id))
        }
    }   
    return(
        <div style={blogStyle}>
            <h1>Welcome @{user.username} </h1>
            <button onClick={logOut}>LogOut</button>
            <h2>Add some new blog!</h2>
            <ul>
            {blogs
            .sort((a, b) => b.likes - a.likes)
            .map((blog) => (
                <li key={blog.id}>
                    Title: {blog.title}
                    <Togglable buttonLabel={'Show details'}>
                        <ul>
                            <li>
                                Author: {blog.author}
                            </li>
                            <li>
                                Likes: {blog.likes}
                                <button onClick={() => increaseLikes(blog.id)}>Like</button>
                            </li>
                            <li>
                                {blog.user.name}
                            </li>
                            <button onClick={()=> deleteBlog(blog.id)}>Delete</button>
                        </ul>
                    </Togglable>
                </li>
            ))}
            </ul>
        </div>
    )
}