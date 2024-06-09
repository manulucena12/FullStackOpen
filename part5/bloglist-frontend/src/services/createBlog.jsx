import axios from "axios"
export const postBlogService = async (blog, token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const response = await axios.post('http://localhost:3002/api/blogs', blog, config)
    return response.data
}