import axios from "axios";
const baseUrl = 'http://localhost:3001/api/persons'
export const getAll = () => {
    return axios
    .get(baseUrl)
    .then(response =>{
        return response.data
    })
}