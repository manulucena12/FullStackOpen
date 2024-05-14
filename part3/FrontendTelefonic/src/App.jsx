import { useEffect, useState } from 'react'
import { getAll } from './services/getPersons'
import { addNewPerson } from './services/addPerson'
function App() {
  const [numbers, setNumbers] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  useEffect(()=>{
    getAll()
    .then(response=>{
      setNumbers(response)
    })
  }, [])
  const handleValue = (event) =>{
    setNewName(event.target.value)
  }
  const handlePhone = (event) =>{
    setNewPhone(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const addedPerson = numbers.some(number=> number.name === newName)
    if(addedPerson){
      return(
        alert('Person already added')
      )
    }else{
      addNewPerson({name: newName, number: newPhone})
      .then(response=>{
        setNumbers([...numbers,response])
        setNewName('')
        setNewPhone('')
      })
    }
  }
  return (
    <>
      <h1>Telefonic diary by @manulucena12</h1>
      <h2>Information</h2>
      <ul>
        {numbers.map((number)=>{
          return(
            <li key={number.id}> <strong>Name: {number.name} Number: {number.number} </strong> </li> 
          )
        })}
      </ul>
      <form>
        <h1>Add person</h1>
        <h2>Name:</h2>
        <input type="text" value={newName} onChange={handleValue} />
        <h2>Phone</h2>
        <input type='tel' value={newPhone} onChange={handlePhone}/>
        <button onClick={(event) => addPerson(event)}>Add new person</button>
      </form>
    </>
  )
}

export default App
