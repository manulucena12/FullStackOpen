import { useResource } from "../hooks/useResource"


export const NoteListComponent = ({notes}) => {
    const {getQuote, postQuote} = useResource()
    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes
                .map(note=>{
                    return(
                    <li key={note.id}> {note.content} </li>
                    )
                })
                }
            </ul>
            <h3>Add a new note!</h3>
            <form onSubmit={postQuote} >
                <input onChange={getQuote} />
                <button>Create</button>
            </form>
        </div>
    )
}