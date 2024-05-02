import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
const AddPerson = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const handleChange = (event) =>{
        setNewName(event.target.value)
        console.log('The value is now changing')
    }
    const [newPhone, setNewPhone] = useState('')
    const handlePhone = (event) =>{
        setNewPhone(event.target.value)
        console.log('The phone is now changing')
    }
    const updatePersons = () => {
        event.preventDefault()
        const addPerson = [...persons];
        const res = addPerson.some(person => person.name === newName);
        const resphone = addPerson.some(person => person.phone === newPhone)
        if(res || newName === '' || resphone || newPhone === '' ){
            alert("We could not add the person you trying to add, please try again")
        }else{
            addPerson.push({name: newName, phone: newPhone, id: persons.length +1 })
            setPersons(addPerson)
            console.log('New person added')
        }
        setNewName('')
    }
    return(
        <div>
            <h1>Phonebook by @manulucena12</h1>
            <h2>Add a person</h2>
            <form onSubmit={updatePersons}>
                Name: <input type="text" onChange={handleChange}/>
                Phone: <input type="tel" onChange={handlePhone} />
            <button> Add a new person </button>
            </form>
        </div>
    )
}
const SearchPerson = ({persons}) => {
    const [lookPerson, setLookPerson] = useState('')
    const searchPerson = (event) => {
        setLookPerson(event.target.value)
        console.log('Filter added')
    }
    const executeSearch = () => {
        event.preventDefault()
        const loofForPerson = [...persons]
        const rest = loofForPerson.some(person => person.name === lookPerson)
        if(rest){
            alert('The person you are looking for is on the contact list')
        }else{
            alert('The person you are looking for is not on the contact list')
        }
        setLookPerson('')
    }
    return(
        <div>
            <h2>Contact searcher</h2>
            <form onSubmit={executeSearch} >
            <input type="text" onChange={searchPerson}/>
            <button>Search Person</button>
          </form>
        </div>
    )
}
const List = ({persons})=> {
    return(
        <div>
            <h2>Contact list</h2>
          <ul>
            {persons
            .map((person)=>{
                return(
                    <li key={person.id}> 
                        <strong>Name: {person.name}.     Phone: {person.phone}</strong>
                    </li>
                )
            })}
          </ul>
        </div>
    )
}
const App = () => {
    const [persons, setPersons] = useState([]) 
    useEffect(()=> {
        axios
        .get('http://localhost:3001/persons')
        .then((response)=>{
            setPersons(response.data)
        })
    },[])
    
      return (
        <div>
          <AddPerson persons={persons} setPersons={setPersons}/>
          <List persons={persons}/>
          <SearchPerson persons={persons}/>
        </div>
      )
}
export default App