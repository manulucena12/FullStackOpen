import '../CSS/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Diaries } from './Pages/Diaries'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../Redux/store'
import { getDiariesAction } from '../Redux/Actions/diaries'

function App() {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getDiariesAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Diaries/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
