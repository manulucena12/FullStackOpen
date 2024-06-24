import { useSelector } from "react-redux"
import { useParams } from "react-router"

export const UserPageComponent = () => {
    const {id} = useParams()
    const userList = useSelector(state=> state.userList)
    const user = userList.find(n => n.id === id)
    if(!user) return null
    return (
        <div>
            <h2>Information of : {user.username} </h2>
            <h3>Blogs created: {user.blogs.length}  </h3>
            <ul>
                {user.blogs
                    .map(blog=>{
                        return <li key={blog.id}> {blog.title} </li>
                    })
                }
            </ul>
        </div>
    )
}