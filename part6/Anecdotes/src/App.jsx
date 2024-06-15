import { useSelector, useDispatch } from 'react-redux'
import { voteQuoteAction } from './actions/vote'
import { AnecdoteFormComponent } from './components/anecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  
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
      <AnecdoteFormComponent/>
    </div>
  )
}

export default App