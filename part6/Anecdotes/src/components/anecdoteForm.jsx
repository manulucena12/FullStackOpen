import { useDispatch } from 'react-redux'
import { createQuote, setNotification } from '../../store'
export const AnecdoteFormComponent = () => {
    const getId = () => (100000 * Math.random()).toFixed(0)
    const dispatch = useDispatch()
    const handleQuote = (event) => {
        event.preventDefault()
        const newAnecdote = event.target.content.value
        event.target.content.value = ''
        const newQuote = {
            content: newAnecdote,
            votes: 0,
            id: getId()
        }
        dispatch(createQuote(newQuote))
        dispatch(setNotification({state: `Your new anecdote: "${newAnecdote}" has been created! `}))
      }
    return (
        <>
            <h2>Create new anecdote!</h2>
            <form onSubmit={handleQuote} >
                <input type='text' name = 'content' placeholder = 'Enter content for the quote' ></input>
                <button>Submit</button>
            </form>
        </>
    )
}