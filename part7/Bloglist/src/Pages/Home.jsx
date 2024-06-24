import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/Slices/userSlice'
import { useNavigate } from "react-router-dom"
export const HomePageComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userList = useSelector(state=> state.userList)
    return (
        <div>
            <h2>Definitive Bloglist App by @manulucena12</h2>
            <h3>Click some link to explore the features!</h3>
            <button onClick={() => {dispatch(setUser(null)); navigate('/'); window.localStorage.removeItem('user')} } >Log out</button>
            <h3>List of registered users</h3>
            <h4>Note: Please press F5 o refresh the page if you want to see the updated information of the users</h4>
            {
                userList
                .map(user=>{
                    return <li key={user.id}>
                        {user.username}, who created {user.blogs.length} blogs 
                    </li>
                })
            }
        </div>
    )
}