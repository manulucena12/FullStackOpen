import axios from "axios"

export const commentBlogService = async (id, comment) => {
    await axios.put(`http://localhost:3002/api/blogs/comments/${id}`,comment)
}