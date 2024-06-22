import { createSlice } from "@reduxjs/toolkit"

export const blogSlice = createSlice({
    name: 'Blogs',
    initialState: [],
    reducers: {
        setBlogs(state,action) {
            return action.payload
        } 
    }
})

export const {setBlogs} = blogSlice.actions