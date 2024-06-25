import { useDispatch } from "react-redux"
import { setNotification } from "../../redux/Slices/notiSlice"
import { useNavigate } from "react-router"
import { registerAction } from "../../redux/Actions/register"
import { Container, Form, Button, InputGroup, FormControl, Alert } from 'react-bootstrap'
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
            <h3>Please fill all the fields, login after you created your account, your username and password must be at least three characters length</h3>
            <Form onSubmit={handleRegister}>
            <Form.Group controlId="formUsername" style={{marginBottom: 10}} >
                    <InputGroup>
                        <FormControl
                            required
                            type="text"
                            name="username"
                            placeholder="Username"
                            style={{ maxWidth: '200px' }} // Ajuste de ancho máximo
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <InputGroup>
                        <FormControl
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            style={{ maxWidth: '200px' }} // Ajuste de ancho máximo
                        />
                    </InputGroup>
                </Form.Group>
                <Button style={{marginTop: 10}} variant="primary" type="submit">
                    Create account
                </Button>
            </Form>
        </div>
    )
}