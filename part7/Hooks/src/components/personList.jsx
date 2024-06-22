import { useResource } from "../hooks/useResource"


export const PersonListComponent = ({persons}) => {
    const {getName, getNumber,postPerson} = useResource()
    return (
        <div>
            <h2>Persons</h2>
            <ul>
                {persons
                .map(person=>{
                    return(
                    <li key={person.id}>Name: {person.name}  Number: {person.number} </li>
                    )
                })
                }
            </ul>
            <h3>Add a new person!</h3>
            <form onSubmit={postPerson} >
                <input onChange={getName} type="text" placeholder="Enter name..." />
                <input onChange={getNumber} type="tel" placeholder="Enter number..." />
                <button>Create</button>
            </form>
        </div>
    )
}