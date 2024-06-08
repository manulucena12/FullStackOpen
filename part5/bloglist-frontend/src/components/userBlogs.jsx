export const Blogs = ({blogs, user}) => {
    return(
        <>
            <h1>Welcome @{user.username} </h1>
            <ul>
            {blogs.map((blog) => (
                <li key={blog.id}>Título: {blog.title} Autor: {blog.author}</li>
            ))}
            </ul>
        </>
    )
}