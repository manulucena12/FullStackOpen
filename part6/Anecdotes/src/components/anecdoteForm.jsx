import { useDispatch } from 'react-redux'
import { createQuoteAction } from '../actions/createQuote'
export const AnecdoteFormComponent = () => {
    const dispatch = useDispatch()
    const handleQuote = (event) => {
        event.preventDefault()
        const newAnecdote = event.target.content.value
        event.target.content.value = ''
        dispatch(createQuoteAction(newAnecdote))
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