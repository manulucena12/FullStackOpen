import axios from "axios"
export const getAnecdotesService = async () => {
    const baseUrl = 'http://localhost:3002/anecdotes'
    const res = await axios.get(baseUrl)
    return res.data
}