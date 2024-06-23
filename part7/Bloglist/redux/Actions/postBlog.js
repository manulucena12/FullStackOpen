import { createBlogService } from '../../src/Services/postBlog'
import { addBlog } from '../Slices/blogSlice'
export const createBlogAction = (blog,token) => {
    return async (dispatch) => {
        const res = await createBlogService(blog,token)
        dispatch(addBlog(res))
    }
}