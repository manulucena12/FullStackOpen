import { useSelector, useDispatch } from 'react-redux'
import { voteQuoteAction } from './actions/vote'
import { createQuoteAction } from './actions/createQuote'

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  const handleQuote = (event) => {
    event.preventDefault()
    const newAnecdote = event.target.content.value
    event.target.content.value = ''
    dispatch(createQuoteAction(newAnecdote))
  }
  return (
    <div>
      <h2>Anecdotes by @manulucena12 </h2>
      {anecdotes
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(voteQuoteAction(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>Create new anecdote!</h2>
      <form onSubmit={handleQuote} >
        <input type='text' name = 'content' placeholder = 'Enter content for the quote' ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App