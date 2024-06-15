import { useSelector, useDispatch } from 'react-redux'
import { voteQuoteAction } from '../actions/vote'
export const AnecdoteListComponent = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    return (
        <>
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
        </>
    )
}