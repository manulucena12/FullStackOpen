import { configureStore, createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdotesAtStart = [
  {
    content: "If it hurts, do it more often",
    id: getId(),
    votes: 0
  },
  {
    content: "Adding manpower to a late software project makes it later!",
    id: getId(),
    votes: 0
  },
  {
    content: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    id: getId(),
    votes: 0
  },
  {
    content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    id: getId(),
    votes: 0
  },
  {
    content: "Premature optimization is the root of all evil.",
    id: getId(),
    votes: 0
  },
  {
    content: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    id: getId(),
    votes: 0
  }
]


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: anecdotesAtStart,
  reducers: {
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

const store = configureStore({
  reducer: {
    anecdotes: anecdoteSlice.reducer,
    filter: filterSlice.reducer
  }
})

export const { voteQuote, createQuote } = anecdoteSlice.actions
export const { setFilter } = filterSlice.actions
export default store
