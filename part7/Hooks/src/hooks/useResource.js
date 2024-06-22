import { useState } from "react"
import { getNotesService } from "../services/getNotes"
import { createNoteService } from "../services/createNote"
import { getPersonsService } from "../services/getPersons"
import { createPersonService } from "../services/createPerson"

export const useResource = () => {
    const [notes,setNotes] = useState([])
    const [persons,setPersons] = useState([])
    const [quote,setQuote] = useState('')
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const getNotes = async () => {
        const newNotes = await getNotesService()
        setNotes(newNotes)
    }
    const getPersons = async () => {
        const newPersons = await getPersonsService()
        setPersons(newPersons)
    }
    const getQuote = (e) => setQuote(e.target.value)
    const getName = (e) => setName(e.target.value)
    const getNumber = (e) => setNumber(e.target.value)
    const postQuote = async (event) => {
        const contentToService = {
            content: quote
        }
        event.preventDefault()
        const postedNote = await createNoteService(contentToService)
        setNotes([...notes, postedNote])
    }
    const postPerson = async (event) => {
        const contentToService = {
            name,
            number
        }
        event.preventDefault()
        const postedPerson = await createPersonService(contentToService)
        setNotes([...persons,postedPerson])
    }
    return {
        notes,
        getNotes,
        getQuote,
        postQuote,
        persons,
        getPersons,
        getName,
        getNumber,
        postPerson
    }
}