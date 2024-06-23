import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/Slices/userSlice'
import { useNavigate } from "react-router-dom"
export const HomePageComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Definitive Bloglist App by @manulucena12</h2>
            <h3>Click some link to explore the features!</h3>
            <button onClick={() => {dispatch(setUser(null)); navigate('/'); window.localStorage.removeItem('user')} } >Log out</button>
        </div>
    )
}