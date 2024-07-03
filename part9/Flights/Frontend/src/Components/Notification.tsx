import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../Redux/store"
import { useEffect } from "react"
import { setNotification } from "../../Redux/Slices/notification"

export const AppNotification: React.FC = () => {
    const noti = useSelector((state: RootState) => state.notification )
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(setNotification(null))
        }, 5000);
    } , [noti, dispatch])

    return (
        <div>
            <p>
                {noti ? noti : null}
            </p>
        </div>
    )
}