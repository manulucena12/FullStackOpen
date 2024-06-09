export const Blogs = ({blogs, user, setUser}) => {
    const logOut = () => {
        setUser(null)
        window.localStorage.removeItem('loggedBlogAppUser')
    }
    
    return(
        <>
            <h1>Welcome @{user.username} </h1>
            <button onClick={logOut}>LogOut</button>
            <h2>Add some new blog!</h2>
            <ul>
            {blogs.map((blog) => (
                <li key={blog.id}>Title: {blog.title} Author: {blog.author}</li>
            ))}
            </ul>
        </>
    )
}