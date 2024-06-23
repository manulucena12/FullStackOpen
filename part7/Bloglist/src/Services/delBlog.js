import axios from "axios"
export const deleteBlogService = async (id,token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    await axios.delete(`http://localhost:3002/api/blogs/${id}`, config)
} 