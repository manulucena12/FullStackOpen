import { setNotification } from "../../redux/Slices/notiSlice"
import { useDispatch } from 'react-redux'
export const BlogPageComponent = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => dispatch(setNotification({name:'Testing'})) } >Testing</button>
        </div>
    )
}