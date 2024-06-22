import axios from "axios"
export const getNotesService = async () => {
    const res = await axios.get('http://localhost:3005/notes')
    return res.data
}