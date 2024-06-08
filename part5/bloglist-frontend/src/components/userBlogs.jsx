export const Blogs = ({blogs, user, setUser}) => {
    const logOut = () => {
        setUser(null)
        window.localStorage.removeItem('loggedBlogAppUser')
    }
    return(
        <>
            <h1>Welcome @{user.username} </h1>
            <button onClick={logOut}>LogOut</button>
            <ul>
            {blogs.map((blog) => (
                <li key={blog.id}>Título: {blog.title} Autor: {blog.author}</li>
            ))}
            </ul>
        </>
    )
}