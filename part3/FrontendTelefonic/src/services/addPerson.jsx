import axios from "axios";
const baseUrl = 'http://localhost:3001/api/persons'
export const addNewPerson = ({name, number}) => {
    return axios
    .post(baseUrl, {name, number})
    .then(response=>{
        return response.data
    })
}