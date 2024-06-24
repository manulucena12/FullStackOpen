import { getUserService } from "../../src/Services/getUsers"
import { setUserList } from "../Slices/userList"

export const getUserAction = () => {
    return async (dispatch) => {
        try{
            const res = await getUserService()
            dispatch(setUserList(res))
        }
        catch(error){
            console.log(error)
        }
    }
}