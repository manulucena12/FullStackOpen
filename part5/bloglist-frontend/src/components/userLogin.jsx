import { useState } from "react"
import { loginService } from "../services/loginPost"
export const Login = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleUser = async (event) => {
        event.preventDefault()
        const userLog = {
            username,
            password
        }
        const loggedUser = await loginService(userLog)
        setUser(loggedUser)
        setPassword('')
        setUsername('')
    }
    return(
        <>
            <h1>Welcome to BlogList by @manulucena12</h1>
            <h2>Login Form</h2>
            <form onSubmit={handleUser}>
                <input type="text" value={username} placeholder="Username" onChange={handleUsername}></input>
                <p></p>
                <input type="password" value={password} placeholder="Password" onChange={handlePassword}></input>
                <p></p>
                <button>Login</button>
            </form>
        </>
    )
}

