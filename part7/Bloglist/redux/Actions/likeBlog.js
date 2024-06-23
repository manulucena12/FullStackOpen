import { likeBlogService } from "../../src/Services/likeBlog"
import { likeBlog } from "../Slices/blogSlice"

export const likeBlogAction = (id) => {
    return async (dispatch) => {
        try{
            await likeBlogService(id)
            dispatch(likeBlog({id}))
        }
        catch(error){
            console.log(error)
        }
    }
}