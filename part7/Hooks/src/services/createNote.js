import axios from "axios"
export const createNoteService = async (content) => {
    const res = await axios.post(`http://localhost:3005/notes`, content)
    return res.data
}