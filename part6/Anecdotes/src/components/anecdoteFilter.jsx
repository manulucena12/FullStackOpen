import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../store'
export const AnecdoteFilterComponent = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
    dispatch(setFilter({name: event.target.value }))
    }

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const filteredAnecdotes = anecdotes.filter(anecdote =>
    anecdote.content.includes(filter)
  )

  return (
    <>
        <input onChange={handleChange} name = 'filter' placeholder='Search some anecdote...' ></input>
        <ul>
        {filteredAnecdotes.map(anecdote => (
            <li key={anecdote.id}>{anecdote.content}</li>
        ))}
        </ul>
    </>
  )
}

