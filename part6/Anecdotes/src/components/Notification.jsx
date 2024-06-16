import { useSelector, useDispatch } from "react-redux"
import { setNotification } from "../../store";

export const NotificationComponent = () => {
  const noti = useSelector(state => state.notification)
  const dispatch = useDispatch()
  setTimeout(() => {
    dispatch(setNotification({state: null}))
  }, 5000);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <>
     {noti
     ? <p style={style} > {noti} </p>
     : null}
    </>
  )
}
