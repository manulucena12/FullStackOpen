import { useState } from "react"
import { useEffect } from "react"
import { sendPerson } from "./services/send"
import { getPerson } from "./services/getPersons"
import axios from "axios"
import { replaceName } from "./services/replace"
const AddPerson = ({ persons, setPersons, setMessage, setShowMessage }) => {
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    
    const handleChange = (event) => {
        setNewName(event.target.value);
    };
    
    const handlePhone = (event) => {
        setNewPhone(event.target.value);
    };
    
    const handleUpdate = (event) => {
        event.preventDefault();
        
        const addPerson = [...persons];
        const res = addPerson.some(person => person.name === newName);
        const resphone = addPerson.some(person => person.phone === newPhone);
        
        if (newName === '' || resphone || newPhone === '') {
            alert("We could not add the person you're trying to add, please try again");
        } else {
            if (res) {
                const personToUpdate = addPerson.find(person => person.name === newName);
                if (window.confirm('This name is already added, do you want to replace its information?')) {
                    replaceName({ id: personToUpdate.id, newData: { name: newName, phone: newPhone } })
                        .then(updatedPerson => {
                            const updatedPersons = persons.map(person =>
                                person.id === updatedPerson.id ? updatedPerson : person
                            );
                            setPersons(updatedPersons);
                            setMessage('Person updated successfully.');
                            setShowMessage(true);
                        })
                        .catch(error => {
                            setMessage('Failed to update person. Please try again.');
                            setShowMessage(true);
                        });
                }
            } else {
                sendPerson({ name: newName, phone: newPhone })
                    .then(response => {
                        setPersons([...persons, response]);
                        setMessage('Person added successfully.');
                        setShowMessage(true);
                    })
                    .catch(error => {
                        setMessage('Failed to add person. Please try again.');
                        setShowMessage(true);
                    });
            }
        }
        setNewName('');
        setNewPhone('');
    };
    
    return (
        <div>
            <h1>Phonebook by @manulucena12</h1>
            <h2>Add a person</h2>
            <form onSubmit={handleUpdate}>
                Name: <input type="text" value={newName} onChange={handleChange} />
                Phone: <input type="tel" value={newPhone} onChange={handlePhone} />
                <button> Add a new person </button>
            </form>
        </div>
    );
};
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
const List = ({persons, setPersons})=> {
    const deletePerson = (id) => {
        if(window.confirm('Do you want to delete this person?')){
            axios
            .delete(`http://localhost:3001/persons/${id}`)
            .then(()=>{
                console.log('Successful elimination')
                alert('Update to see the changes')
                setPersons()
        })
        }
    }
    return(
        <div>
            <h2>Contact list</h2>
          <ul>
            {persons
            .map((person)=>{
                return(
                    <li key={person.id} className="note"> 
                        <strong>Name: {person.name}. Phone: {person.phone}</strong>
                        <button onClick={()=> deletePerson(person.id)} >Delete</button>
                    </li>
                )
            })}
          </ul>
        </div>
    )
}
const Notification = ({ message, setShowMessage }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="error">
            {message}
        </div>
    );
};
const App = () => {
    const [persons, setPersons] = useState([]) 
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    useEffect(()=> {
        getPerson()
        .then(response=>
            setPersons(response)
        )
    },[])
    return (
        <div>
          {showMessage && <Notification message={message} />}
          <AddPerson persons={persons} setPersons={setPersons} setMessage={setMessage} setShowMessage={setShowMessage} />
          <List persons={persons}/>
          <SearchPerson persons={persons}/>
        </div>
    )
}
export default App