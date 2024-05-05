import axios from "axios"
export const sendPerson = ({name, phone}) =>{
    return axios
    .post('http://localhost:3001/persons', {name, phone})
    .then(response =>{
        return response.data
    })
}