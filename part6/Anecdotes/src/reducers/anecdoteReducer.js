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


const anecdoteReducer = (state = anecdotesAtStart, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
    case 'VOTE_QUOTE':
    return state.map(quote =>
      quote.id === action.payload.id ? {...quote, votes: quote.votes +1} : quote
    )
  default: return  anecdotesAtStart
  }
}

export default anecdoteReducer