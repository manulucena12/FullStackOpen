import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { commentBlogAction } from "../../redux/Actions/commentBlog"
import { setNotification } from "../../redux/Slices/notiSlice"
export const BlogInfoComponent = () => {
    const dispatch = useDispatch()
    const handleComment = (event) => {  
        const comment = event.target.comment.value
        const newComment = {
            comments: comment
        }
        try {
            dispatch(commentBlogAction(id, newComment))
            dispatch(setNotification({name: `Your comment ${comment} has been published!`}))
            event.target.comment.value = ''
        }
        catch(error){
            console.log(error)
        }
    }
    const {id} = useParams()
    const blogs = useSelector(state=> state.blogs)
    const blog = blogs.find(n => n.id === id)
    if(!blog) return null
    return (
        <div>
           <h2> {blog.title} </h2>
           <h4> Created by @{blog.username} </h4>
           <h4>Likes: {blog.likes}  </h4>
           <h4>Tell {blog.username} what you think about his/her blog! </h4>
           <form onSubmit={handleComment} >
             <input required name="comment" placeholder="Add comment..." />
             <button style={{marginLeft: 5}} >Comment</button>
           </form>
           <h4>Comments of this blog</h4>
           {Array.isArray(blog.comments) && blog.comments.length !== 0
                ? blog.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))
                : <h5>There's no comment yet, be the first one!</h5>
            }
            <footer>
                <p>Note: All comments are anonymous, please do not be disrespectful.</p>
            </footer>
        </div>
    )
}