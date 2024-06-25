import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { commentBlogAction } from "../../redux/Actions/commentBlog"
import { setNotification } from "../../redux/Slices/notiSlice"
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap'
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
        <Container style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
            <Row>
                <Col md={8}>
                    <h2>{blog.title}</h2>
                    <h4>Created by @{blog.username}</h4>
                    <h4>Likes: {blog.likes}</h4>
                    <h4>Tell {blog.username} what you think about his/her blog!</h4>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Form onSubmit={handleComment}>
                        <Form.Group controlId="formComment">
                            <Form.Control
                                required
                                name="comment"
                                placeholder="Add comment..."
                                style={{ marginBottom: '10px' }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Comment
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <h4 style={{ marginTop: '20px' }}>Comments of this blog</h4>
                    {Array.isArray(blog.comments) && blog.comments.length !== 0 ? (
                        <ListGroup>
                            {blog.comments.map((comment, index) => (
                                <ListGroup.Item key={index}>{comment}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <h5>There's no comment yet, be the first one!</h5>
                    )}
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <footer style={{ marginTop: '20px' }}>
                        <p>Note: All comments are anonymous, please do not be disrespectful.</p>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}