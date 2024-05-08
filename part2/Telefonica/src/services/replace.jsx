import axios from "axios";
export const replaceName = ({ id, newData }) => {
    return axios.put(`http://localhost:3001/persons/${id}`, newData)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};
