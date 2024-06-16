import axios from "axios"
export const postAnecdoteService = async (content) => {
    const baseUrl = 'http://localhost:3002/anecdotes'
    const newNote = {
        content,
        votes: 0
    }
    const response = await axios.post(baseUrl, newNote)
    return response.data
}