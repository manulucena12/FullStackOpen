import { useSelector, useDispatch } from 'react-redux'
import {setNotification} from '../../store'
import { putAnecdoteAction } from '../actions/changeQuote'

export const AnecdoteListComponent = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  

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
              <button onClick={() => {
                dispatch(putAnecdoteAction(anecdote.content, anecdote.votes, anecdote.id)); 
                dispatch(setNotification({state: `You vote for ${anecdote.content} `})) }
                }>vote</button>
            </div>
          </div>
        )}
    </>
  )
}
