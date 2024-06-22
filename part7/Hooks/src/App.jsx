import { useState, useEffect} from 'react'
import { useResource } from './hooks/useResource'
import { NoteListComponent } from './components/noteList'
import { PersonListComponent } from './components/personList'


const App = () => {
  const {getNotes,notes,persons,getPersons} = useResource()
  useEffect(() => {
    getNotes()
    getPersons()
  }, [notes, persons])
  

  return (
    <div>
      <NoteListComponent notes={notes}/>
      <PersonListComponent persons={persons}/>
    </div>
  )
}

export default App