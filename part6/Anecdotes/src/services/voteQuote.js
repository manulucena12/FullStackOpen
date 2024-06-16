import axios from "axios"
export const putAnecdoteService = async (content,votes,id) => {
    const updateNote = {
        content,
        votes: votes +1,
        id
    }
    const res = await axios.put(`http://localhost:3002/anecdotes/${id}`, updateNote)
    return res.data
}