import axios from "axios"
export const getPersonsService = async () => {
    const res = await axios.get('http://localhost:3005/persons')
    return res.data
}