import axios from 'axios'
export const getCountryService = async (name) => {
    const response = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
    return response.data
}