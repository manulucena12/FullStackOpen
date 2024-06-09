import axios from "axios"
export const increaseLikesService = async (id) => {
    const response = await axios.put(`http://localhost:3002/api/blogs/likes/${id}`)
    return response.data
}