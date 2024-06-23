import { useState } from "react"
import { setNotification } from "../../redux/Slices/notiSlice"
import { useDispatch, useSelector } from 'react-redux'
import { createBlogAction } from "../../redux/Actions/postBlog"
export const BlogPageComponent = () => {
    const [show,setShow] = useState(null)
    const label = show ? 'Cancel' : 'Create a new blog'
    const dispatch = useDispatch()
    const token = useSelector(state=>state.token)
    const blogs = useSelector(state=>state.blogs)
    const user = useSelector(state=>state.user)
    const handleBlog = async (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const author = event.target.author.value
        const newBlog = {
            title,
            author,
            likes: 0,
            username: user.username
        }
        event.target.title.value = ''
        event.target.author.value = ''
        try{
            dispatch(createBlogAction(newBlog,token))
            dispatch(setNotification({name: 'Your blog has been created successfully!'}))
        }
        catch{
            dispatch(setNotification({name: 'We could not have created your blog, please, try again later'}))
        }
    }
    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {
                    blogs
                    .map(blog=>{
                        return (
                            <li key={blog.id}>{blog.title} by @{blog.username} has {blog.likes} likes </li>
                        )
                    })
                }
            </ul>
            <button style={{marginBottom: 5}} onClick={() => setShow(!show) } >{label}</button>
            {
                show
                ? <form onSubmit={handleBlog} >
                    <input required placeholder="Title" name="title" />
                    <p></p>
                    <input required placeholder="Author" name="author" />
                    <p></p>
                    <button>Create</button>
                    </form>
                : null
            }
        </div>
    )
}