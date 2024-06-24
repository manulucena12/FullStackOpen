import { createSlice } from "@reduxjs/toolkit"

export const blogSlice = createSlice({
    name: 'Blogs',
    initialState: [],
    reducers: {
        setBlogs(state,action) {
            return action.payload 
        },
        addBlog(state,action) {
            state.push({...action.payload, comments: []})
        },
        likeBlog(state,action) {
            return state.map(blog => blog.id === action.payload.id ? {...blog, likes: blog.likes +1} : blog )
        },
        deleteBlog(state,action) {
            return state.filter(blog => blog.id !== action.payload.id )
        },
        commentBlog(state,action) {
            return state.map(blog => blog.id === action.payload.id ? {...blog, comments: [...blog.comments, action.payload.comment]} : blog )
        }
    }
})

export const {setBlogs, addBlog, likeBlog, deleteBlog, commentBlog} = blogSlice.actions