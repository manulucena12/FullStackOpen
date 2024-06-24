import axios from "axios"
export const registerService = async (user) => {
    await axios.post('http://localhost:3002/api/users',user)
}