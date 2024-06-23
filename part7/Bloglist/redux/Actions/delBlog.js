import { deleteBlogService } from "../../src/Services/delBlog"
import { deleteBlog } from "../Slices/blogSlice"

export const deleteBlogAction = (id,token) => {
    return async (dispatch) => {
        try{
            await deleteBlogService(id,token)
            dispatch(deleteBlog({id}))
        }
        catch(error){
            console.log(error)
        }
    }
}