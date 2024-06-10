import { useState } from "react"
import { postBlogService } from "../services/createBlog"
import { Togglable } from "./togglable"
import { useRef } from "react"
export const BlogForm = ({token, setBlogs, setMessage, blogs, mockHandler}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const elementRef = useRef()
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleAuthor = (event) => {
        setAuthor(event.target.value)
    }
    const handleBlog = async (event) => {
        event.preventDefault()
        const newBlog = {
            title,
            author,
            likes: 0
        }
        try {
            const blogged = await postBlogService(newBlog, token)
            setBlogs([...blogs, blogged])
            setMessage(`Blog ${blogged.title} by ${blogged.author} has been created successfully`)
            elementRef.current.handleVisibility()
            setAuthor('')
            setTitle('')
        }
        catch(error){
            console.log(error)
            setMessage(`The blog could not have been created`)
        }
    }
    return(
        <>
            <Togglable buttonLabel={'Create a new blog'} ref={elementRef}>
            <form onSubmit={()=> {mockHandler(), handleBlog()}}>
                <input type="text" value={title} placeholder="Title" onChange={handleTitle}></input>
                <p></p>
                <input type="text" value={author} placeholder="Author" onChange={handleAuthor}></input>
                <p></p>
                <button>Create Blog</button>
            </form>
            </Togglable>
        </>
    )
}