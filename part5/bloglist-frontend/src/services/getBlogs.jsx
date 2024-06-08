import axios from "axios"
export const getBlogsService = async () => {
    const response = await axios.get('http://localhost:3002/api/blogs')
    return response.data
}