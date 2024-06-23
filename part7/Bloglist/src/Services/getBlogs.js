import axios from "axios"
export const getBlogsService = async () => {
    const res = await axios.get('http://localhost:3002/api/blogs')
    return res.data
}