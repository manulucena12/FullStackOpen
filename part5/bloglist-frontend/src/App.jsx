import { useState, useEffect } from 'react'
import { Login } from './components/userLogin'
import { getBlogsService } from './services/getBlogs'
import { Blogs } from './components/userBlogs'


const App = () => {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const renderBlogs = async () => {
      const getBlogs = await getBlogsService()
      setBlogs(getBlogs)
    }
    renderBlogs()
  }, [])
  
  return (
    <>
      {
        user
        ? <Blogs 
            blogs={blogs}
            user={user}
          />
        : <Login 
            setUser={setUser}
          />
      }
    </>
      
  )
}

export default App