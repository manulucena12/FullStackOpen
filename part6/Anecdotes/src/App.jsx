import { AnecdoteListComponent } from './components/anecdoteList'
import { AnecdoteFormComponent } from './components/anecdoteForm'
import { AnecdoteFilterComponent } from './components/anecdoteFilter'
import { NotificationComponent } from './components/Notification'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAnecdotesAction } from './actions/fetchQuotes'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAnecdotesAction())
  }, [])
  
  return (
    <>
      <h2>Anecdotes by @manulucena12 </h2>
      <NotificationComponent/>
      <AnecdoteFilterComponent/>
      <AnecdoteListComponent/>
      <AnecdoteFormComponent/>
    </>
  )
  
}

export default App