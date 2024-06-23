import { getBlogsService } from '../../src/Services/getBlogs'
import { setBlogs } from '../Slices/blogSlice'
export const getBlogsAction = () => {
    return async (dispatch) => {
        const blogs = await getBlogsService()
        dispatch(setBlogs(blogs))
    }
}