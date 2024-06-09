import { Togglable } from "./togglable"

export const Blogs = ({blogs, user, setUser}) => {
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
    return(
        <div style={blogStyle}>
            <h1>Welcome @{user.username} </h1>
            <button onClick={logOut}>LogOut</button>
            <h2>Add some new blog!</h2>
            <ul>
            {blogs.map((blog) => (
                <li key={blog.id}>
                    Title: {blog.title}
                    <Togglable buttonLabel={'Show details'}>
                        <ul>
                            <li>
                                Author: {blog.author}
                            </li>
                            <li>
                                Likes: {blog.likes}
                            </li>
                        </ul>
                    </Togglable>
                </li>
            ))}
            </ul>
        </div>
    )
}