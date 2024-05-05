import axios from "axios";
export const getPerson = () => {
    return axios 
    .get('http://localhost:3001/persons')
    .then(response=>{
        return response.data
    })
}