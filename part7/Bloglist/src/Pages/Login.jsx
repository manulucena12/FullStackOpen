import { setNotification } from "../../redux/Slices/notiSlice"
import { setToken } from "../../redux/Slices/tokenSlice"
import { setUser } from "../../redux/Slices/userSlice"
import { loginService } from "../Services/loginService"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
export const LoginPageComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogin = async (event) => {
        event.preventDefault()
        const newUsername = event.target.username.value
        const newPassword = event.target.password.value
        event.target.username.value = ''
        event.target.password.value = ''
        const userToLog = {
            username: newUsername,
            password: newPassword
        }
        try{
            const user = await loginService(userToLog)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(setUser(user))
            dispatch(setToken({name: `Bearer ${user.token}`}))
            navigate('/')
            dispatch(setNotification({name: 'Logged successfully!'}))
        }
        catch{
            dispatch(setNotification({name: 'Error: Username and/or password is wrong'}))
        }
    }
    
    return (
        <div>
            <h1>Login</h1>
            <Form style={{ marginTop: '20px', marginLeft: '5px', width: '300px', marginBottom: '10px' }} onSubmit={handleLogin}>
                <Form.Group controlId="formUsername" style={{marginBottom: '10px'}} >
                    <Form.Control type="text" name="username" placeholder="Username" />
                </Form.Group >
                <Form.Group controlId="formPassword" style={{marginBottom: '10px'}} >
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Link to={'/register'}>Don't you have an accont? Register now! </Link>
        </div>
    )
}