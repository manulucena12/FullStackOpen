import { configureStore } from "@reduxjs/toolkit"
import { blogSlice } from "./Slices/blogSlice"
import { notiSlice } from "./Slices/notiSlice"
import { userSlice } from "./Slices/userSlice"

export const Store = configureStore({
    reducer: {
        blogs: blogSlice.reducer,
        notification: notiSlice.reducer,
        user: userSlice.reducer
    }
})