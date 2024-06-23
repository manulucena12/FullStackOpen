import axios from "axios"
export const likeBlogService = async (id) => {
    const res = axios.put(`http://localhost:3002/api/blogs/likes/${id}`)
    return res.data
}