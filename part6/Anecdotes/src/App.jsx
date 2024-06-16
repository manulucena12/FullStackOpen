import { AnecdoteListComponent } from './components/anecdoteList'
import { AnecdoteFormComponent } from './components/anecdoteForm'
import { AnecdoteFilterComponent } from './components/anecdoteFilter'
import { NotificationComponent } from './components/Notification'


const App = () => {
  
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