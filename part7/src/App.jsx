import { useState } from 'react'
import { Link,BrowserRouter,Route,Routes, useParams, useNavigate,Navigate } from 'react-router-dom'
import { useField } from './hooks/useField'
const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <a href='#' style={padding}>anecdotes</a>
      <a href='#' style={padding}>create new</a>
      <a href='#' style={padding}>about</a>
    </div>
  )
}

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <li key={anecdote.id} >
        <Link to={`/${anecdote.id}`} >{anecdote.content}</Link>
      </li>)}
    </ul>
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNew = ({addNew, setNotification}) => {
  const {content,author,info,getContent,getAuthor,getInfo} = useField()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content,
      author,
      info,
      votes: 0
    });
    setNotification('Note added')
    navigate('/') 
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' value={content} onChange={getContent} />
        </div>
        <div>
          author
          <input name='author' value={author} onChange={getAuthor} />
        </div>
        <div>
          url for more info
          <input name='info' value={info} onChange={getInfo} />
        </div>
        <button>create</button>
      </form>
    </div>
  )

}

const NotePage = ({anecdotes}) => {
  const {noteId} = useParams()
  const note = anecdotes.find(note=> note.id === Number(noteId))
  return (
    <div>
      <h1>Details for the anecdote {note.content} by {note.author} </h1>
      <h2>Votes: {note.votes}</h2>
      <h2><Link to={note.info}>More informationn</Link> </h2>
    </div>
  )
}

const Notification = ({notification, setNotification}) => {
  setTimeout(() => {
    setNotification(null)
  }, 5000);
  return(
    <div>
      {notification
        ? notification
        : null
      }
    </div>
  )
}
const App = () => {
  const [notification, setNotification] = useState(null)
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div>
      <BrowserRouter>
      <Link to={'/'} style={{ marginRight: '10px' }} >Home</Link>
        <Link to={'/create'}style={{ marginRight: '10px' }}>Create Note</Link>
        <Link to={'/about'}>About</Link>
        <Routes>
          <Route path = '/' element={<AnecdoteList anecdotes={anecdotes}/>} />
          <Route path = '/create' element={<CreateNew addNew={addNew} setNotification={setNotification}/>} />
          <Route path = '/about' element={<About/>} />
          <Route path = '/:noteId' element={<NotePage anecdotes={anecdotes}/>} />
        </Routes>
      <Notification notification={notification} setNotification={setNotification}/>
      </BrowserRouter>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
