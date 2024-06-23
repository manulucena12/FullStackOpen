import axios from "axios"
export const createBlogService = async (blog,token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const res = await axios.post('http://localhost:3002/api/blogs',blog,config)
    return res.data
}