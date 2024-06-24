import { registerService } from "../../src/Services/register"
import { addUserToList } from "../Slices/userList"

export const registerAction = (user) => {
    return async (dispatch) => {
        try{
            await registerService(user)
            dispatch(addUserToList(user))
        }
        catch(error){
            console.log(error)
        }
    }
}