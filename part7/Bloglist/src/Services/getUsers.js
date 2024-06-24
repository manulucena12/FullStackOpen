import axios from "axios"
export const getUserService = async () => {
    const res = await axios.get('http://localhost:3002/api/users')
    return res.data
}