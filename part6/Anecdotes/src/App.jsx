import { AnecdoteListComponent } from './components/anecdoteList'
import { AnecdoteFormComponent } from './components/anecdoteForm'
import { AnecdoteFilterComponent } from './components/anecdoteFilter'


const App = () => {
  
  return (
    <>
      <h2>Anecdotes by @manulucena12 </h2>
      <AnecdoteFilterComponent/>
      <AnecdoteListComponent/>
      <AnecdoteFormComponent/>
    </>
  )
  
}

export default App