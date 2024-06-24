import { commentBlogService } from "../../src/Services/commentBlog"
import { commentBlog } from "../Slices/blogSlice"

export const commentBlogAction = (id,comment) => {
    return async (dispatch) => {
        try{
            await commentBlogService(id,comment)
            dispatch(commentBlog({id, comment}))
        }
        catch(error){
            console.log(error)
        }
    }
}