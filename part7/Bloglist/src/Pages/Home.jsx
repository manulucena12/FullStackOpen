import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/Slices/userSlice'
import { Link, useNavigate } from "react-router-dom"
import { Table, Button } from 'react-bootstrap'
import '../../CSS/Home.css'
export const HomePageComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userList = useSelector(state=> state.userList)
    const user = useSelector(state=>state.user)
    return (
        <div>
            <h2 style={{marginTop: 20}} >Welcome back {user.username}!</h2>
            <h3>Click some link to explore the features!</h3>
            <h3>List of registered users</h3>
            <h4>Note: Please press F5 o refresh the page if you want to see the updated information of the users</h4>
            <Table striped bordered hover style={{marginTop: 20}} >
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Number of Blogs</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <Link to={`/user/${user.id}`}>{user.username}</Link>
                            </td>
                            <td>{user.blogs.length}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <footer>
                <p>Bloglist definitive app by @manulucena12</p>
                <Button  variant="outline-dark" size='sm' onClick={() => {dispatch(setUser(null)); navigate('/'); window.localStorage.removeItem('user')} } >Log out</Button>
            </footer>
        </div>
    )
}