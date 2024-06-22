import axios from "axios"
export const createPersonService = async (content) => {
    const res = await axios.post(`http://localhost:3005/persons`, content)
    return res.data
}