import { useState } from "react"
const Names = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', phone: 678456846, id: 1}
      ]) 
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
      return (
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={updatePersons} >
            Name: <input type="text" onChange={handleChange}/>
            Phone: <input type="tel" onChange={handlePhone} />
            <button> Add a new person </button>
          </form>
          <ul>
            {persons
            .map((person)=>{
                return(
                    <li key={person.id}> 
                        <strong>Name: {person.name} Phone: {person.phone}</strong>
                    </li>
                )
            })}
          </ul>
        </div>
      )
}
export default Names