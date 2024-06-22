import { setNotification } from "../../redux/Slices/notiSlice"
import { setUser } from "../../redux/Slices/userSlice"
import { loginService } from "../Services/loginService"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
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
            dispatch(setNotification({name: 'Logged successfully!'}))
            dispatch(setUser(user))
            navigate('/home')
        }
        catch{
            dispatch(setNotification({name: 'Error: Username and/or password is wrong'}))
        }
    }
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin} >
                <input type="text" name="username" placeholder="Username" />
                <p></p>
                <input type="password" name="password" placeholder="Password" />
                <p></p>
                <button>Login</button>
            </form>
        </div>
    )
}