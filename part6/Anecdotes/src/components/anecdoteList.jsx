import { useSelector, useDispatch } from 'react-redux'
import {setNotification, voteQuote } from '../../store'

export const AnecdoteListComponent = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const handleVote = (id) => {
    dispatch(voteQuote(id))
  }

  return (
    <>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {handleVote({id: anecdote.id}); dispatch(setNotification({state: `You vote for ${anecdote.content} `})) }}>vote</button>
            </div>
          </div>
        )}
    </>
  )
}
