import { useState } from "react"
const Names = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas'}
      ]) 
    const [newName, setNewName] = useState('')
    const handleChange = (event) =>{
        setNewName(event.target.value)
        console.log('The value is now changing')
    }
    const updatePersons = () => {
        event.preventDefault()
        const addPerson = [...persons];
        const res = addPerson.some(person => person.name === newName);
        if(res || newName === '' ){
            alert("This name is already included or you have not written a name, please try again")
        }else{
            addPerson.push({name: newName})
            setPersons(addPerson)
            console.log('New person added')
        }
        setNewName('')
    }
      return (
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={updatePersons} >
            Name: <input type="text" onChange={handleChange} />
            <button> Add a new person </button>
          </form>
          <ul>
            {persons
            .map((person)=>{
                return(
                    <li> {person.name} </li>
                )
            })}
          </ul>
        </div>
      )
}
export default Names