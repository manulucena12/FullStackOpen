import { configureStore } from "@reduxjs/toolkit"
import { blogSlice } from "./Slices/blogSlice"
import { notiSlice } from "./Slices/notiSlice"

export const Store = configureStore({
    reducer: {
        blogs: blogSlice.reducer,
        notification: notiSlice.reducer
    }
})