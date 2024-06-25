import { useState } from "react"
import { setNotification } from "../../redux/Slices/notiSlice"
import { useDispatch, useSelector } from 'react-redux'
import { createBlogAction } from "../../redux/Actions/postBlog"
import { likeBlogAction } from "../../redux/Actions/likeBlog"
import { deleteBlogAction } from "../../redux/Actions/delBlog"
import { useNavigate } from "react-router"
import {Accordion, Button, Form} from 'react-bootstrap'
import '../../CSS/Home.css'
export const BlogPageComponent = () => {
    const [show,setShow] = useState(null)
    const label = show ? 'Cancel' : 'Create a new blog'
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
            comments: [],
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
            <Accordion >
            {blogs.map((blog, index) => (
                <Accordion.Item eventKey={index.toString()} key={blog.id}>
                    <Accordion.Header>
                        {blog.title} by @{blog.username} has {blog.likes} likes
                    </Accordion.Header>
                    <Accordion.Body>
                        <Button variant="primary" style={{ marginRight: 8 }} onClick={() => dispatch(likeBlogAction(blog.id))}>
                            Like
                        </Button>
                        <Button variant="danger" style={{ marginRight: 8 }} onClick={() => {
                            try {
                                dispatch(deleteBlogAction(blog.id, token));
                                dispatch(setNotification({ name: 'Your blog has been deleted!' }));
                            } catch (error) {
                                console.log(error);
                                dispatch(setNotification({ name: 'You cannot delete a blog that is not yours!' }));
                            }
                        }}>
                            Delete
                        </Button>
                        <Button variant="info" onClick={() => navigate(`/blog/${blog.id}`)}>
                            View Blog
                        </Button>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
            <Button className="post" style={{marginTop: 10}} onClick={() => setShow(!show) } >{label}</Button>
            {
                show
                    ?   <Form style={{ marginTop: 10 }} onSubmit={handleBlog}>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Control
                                    required
                                    placeholder="Title"
                                    name="title"
                                    style={{ width: '300px' }} // Ajusta el ancho aquí
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formAuthor">
                                <Form.Control
                                    required
                                    placeholder="Author"
                                    name="author"
                                    style={{ width: '300px' }} // Ajusta el ancho aquí
                                />
                            </Form.Group>
                            <Button variant="outline-success" type="submit">
                                Create
                            </Button>
                    </Form>
                : null
            }
        </div>
    )
}