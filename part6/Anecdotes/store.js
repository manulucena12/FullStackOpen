//Exercise 6.11 was done with 6.10!

import { configureStore, createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action){
      return action.payload
    },
    voteQuote(state, action) {
      return state.map(quote =>
        quote.id === action.payload.id ? { ...quote, votes: quote.votes + 1 } : quote
      )
    },
    createQuote(state, action) {
      return [...state, action.payload]
    }
  }
})

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload.name
    }
  }
})

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotification(state,action){
      return action.payload.state
    }
  }
})

const store = configureStore({
  reducer: {
    anecdotes: anecdoteSlice.reducer,
    filter: filterSlice.reducer,
    notification: notificationSlice.reducer
  }
})

export const { voteQuote, createQuote, setAnecdotes } = anecdoteSlice.actions
export const { setFilter } = filterSlice.actions
export const { setNotification } = notificationSlice.actions
export default store
