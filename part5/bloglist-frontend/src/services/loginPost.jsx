import axios from 'axios'
export const loginService = async (user) => {
    const response = await axios.post('http://localhost:3002/api/login', user)
    return response.data
}