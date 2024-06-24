import { useSelector } from "react-redux"
import { useParams } from "react-router"

export const BlogInfoComponent = () => {
    const {id} = useParams()
    const blogs = useSelector(state=> state.blogs)
    const blog = blogs.find(n => n.id === id)
    if(!blog) return null
    return (
        <div>
           <h2> {blog.title} </h2>
           <h4> Created by @{blog.username} </h4>
           <h4>Likes: {blog.likes}  </h4>
        </div>
    )
}