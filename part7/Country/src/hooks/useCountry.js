import { useState } from "react"
import { getCountryService } from "../services/getCountry"
export const useCountry = () => {

    const [name, setName] = useState('')
    const getName = (e) => setName(e.target.value)
    const [country,setCountry] = useState(null)
    const searchCountry = async (event) => {
        event.preventDefault()
        const countrySearched = await getCountryService(name)
        setCountry(countrySearched)
    }
    

    return {
        name,
        getName,
        country,
        searchCountry
    }

}