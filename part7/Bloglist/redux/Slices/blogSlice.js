import { createSlice } from "@reduxjs/toolkit"

export const blogSlice = createSlice({
    name: 'Blogs',
    initialState: [],
    reducers: {
        setBlogs(state,action) {
            return action.payload 
        },
        addBlog(state,action) {
            state.push(action.payload)
        } 
    }
})

export const {setBlogs, addBlog} = blogSlice.actions