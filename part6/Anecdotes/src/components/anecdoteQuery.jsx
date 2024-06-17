import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { useNotification } from '../context/notiContext'

export const QueryAnecdotesComponent = () =>{

    const [newAnecdote, setNewAnecdote] = useState('')

    const queryClient = useQueryClient()

    const { setNotification } = useNotification()

    const getAnecdotes = async () => {
        const res = await fetch('http://localhost:3002/anecdotes')
        return res.json()
    }

    const addAnecdote = async (anecdote) => {
        const res = await fetch('http://localhost:3002/anecdotes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(anecdote)
        })
        return res.json()
    }

    const mutation = useMutation(addAnecdote, {
        onSuccess: () => {
          queryClient.invalidateQueries('anecdotes')
        }
    })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newAnecdote.length < 5) {
          alert('The anecdote content must be 5 characters long.')
          return
        }
        mutation.mutate({ content: newAnecdote, votes: 0 })
        setNewAnecdote('')
        setNotification('A new anecdote was added properly')
    }

    const voteAnecdote = async (anecdote) => {
        const res = await fetch(`http://localhost:3002/anecdotes/${anecdote.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ votes: anecdote.votes + 1 })
        })
        return res.json()
    }

    const voteMutation = useMutation(voteAnecdote, {
        onSuccess: () => {
          queryClient.invalidateQueries('anecdotes')
          setNotification('Voted')
        }
    })

    const handleVote = (anecdote) => {
        voteMutation.mutate(anecdote);
    }

    const { data, status} = useQuery('anecdotes', getAnecdotes )
    if(status === 'loading'){
        return <p>Getting anecdotes...</p>
    }else if(status === 'error'){
        return <p>We could not get the anecdotes due to a server problem, please try again later</p>
    }
    return (
        <>
            <h1>Anecdotes by @manulucena12</h1>
            <ul>
                {data
                    .map(anecdote => {
                        return <li 
                            key={anecdote.id} > {anecdote.content} has {anecdote.votes} votes 
                            <button onClick={() => handleVote(anecdote)}>Vote</button>
                        </li>
                    })
                }
            </ul>
            <h3>Create a new anecdote</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" value={newAnecdote} onChange={() => setNewAnecdote(event.target.value)} placeholder="Add a new anecdote"/>
            <button>Create anecdote</button>
        </form>
        </>
    )
}