import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../../redux/Slices/notiSlice';
export const NotificationComponent = () => {
    const noti = useSelector(state=>state.notification)
    const dispatch = useDispatch()
    setTimeout(() => {
        dispatch(setNotification({name: null}))
    }, 5000);
    return(
        <div>
            {noti
                ? noti
                : null
            }
        </div>
    )
}