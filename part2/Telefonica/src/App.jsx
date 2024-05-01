import { useState } from 'react'
import Names from './Names'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Names/>
    </>
  )
}

export default App
