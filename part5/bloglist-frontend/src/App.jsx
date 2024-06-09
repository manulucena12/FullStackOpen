import { useState, useEffect } from 'react'
import { Login } from './components/userLogin'
import { getBlogsService } from './services/getBlogs'
import { Blogs } from './components/userBlogs'
import { Notification } from './components/notification'


const App = () => {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [token, setToken] = useState(null)
  const [message, setMessage] = useState(null)
  useEffect(() => {
    const renderBlogs = async () => {
      const getBlogs = await getBlogsService()
      setBlogs(getBlogs)
    }
    renderBlogs()
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(`Bearer ${user.token}`)
      console.log(token)
    }
  }, [])
  
  return (
    <>
      {
        user
        ? <Blogs 
            blogs={blogs}
            user={user}
            setUser={setUser}
            token={token}
            setBlogs={setBlogs}
            setMessage={setMessage}
          />
        : <Login 
            setUser={setUser}
            setToken={setToken}
            token={token}
            setMessage={setMessage}
          />
      }
      {message && <Notification message={message} setMessage={setMessage} />}
    </>
  )
}

export default App