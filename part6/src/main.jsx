import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const state = store.getState()
  return (
    <div>
      <button onClick={() => {store.dispatch({type: 'GOOD'})} }>Good</button> 
      <button onClick={() => {store.dispatch({type: 'OK'})} } >Ok</button> 
      <button onClick={() => {store.dispatch({type: 'BAD'})} } >Bad</button>
      <button onClick={() => {store.dispatch({type: 'ZERO'})} } >Reset Stats</button>
      <div>Good: {state.good}</div>
      <div>Bad: {state.bad}</div>
      <div>Ok: {state.ok}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
