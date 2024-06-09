import axios from "axios";
export const replacePerson = ({updateData}) => {
    return axios.put(`http://localhost:3001/api/persons/${updateData.id}`, updateData)
    .then(response => {
        return response.data;
    })
}