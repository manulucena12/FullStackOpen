import { useDispatch } from "react-redux"
import { setNotification } from "../../redux/Slices/notiSlice"
import { useNavigate } from "react-router"
import { registerAction } from "../../redux/Actions/register"

export const RegisterPageComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister = (event) => {
        event.preventDefault()
        const newUsername = event.target.username.value
        const newPassword = event.target.password.value
        const newUser = {
            username: newUsername,
            password: newPassword
        }
        try{
            dispatch(registerAction(newUser))
            navigate('/')
            dispatch(setNotification({name: 'User created, please login, then go to the app!'}))
        }
        catch{
            dispatch(setNotification({name: 'Error: We could not have created your user, please try again later'}))
        }

    }
    return(
        <div>
            <h1>Create a new account</h1>
            <h3>Please fill all the fields, login after you created your account, your username and password must be at least three characters lenght</h3>
            <form onSubmit={handleRegister} >
                <input name="username" placeholder="Username"/>
                <p></p>
                <input name="password" placeholder="Password"/>
                <p></p>
                <button>Create account</button>
            </form>
        </div>
    )
}