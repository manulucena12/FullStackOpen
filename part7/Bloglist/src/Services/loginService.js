import axios from "axios"
export const loginService = async (userToLog) => {
    const res = await axios.post('http://localhost:3002/api/login', userToLog)
    return res.data
}