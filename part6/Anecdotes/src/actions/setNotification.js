import { setNotification } from "../../store";

export const setNotificationAction = (message, timeout) =>{
    return (dispatch) => {
        setTimeout(() => {
           dispatch(setNotification({state: null})) 
        }, timeout);
        dispatch({state: message})
    }
}