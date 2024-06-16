import { useQuery } from "react-query"

export const QueryAnecdotesComponent = () =>{

    const getAnecdotes = async () => {
        const res = await fetch('http://localhost:3002/anecdotes')
        return res.json()
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
                        return <li key={anecdote.id} > {anecdote.content} has {anecdote.votes} votes </li>
                    })
                }
            </ul>
        </>
    )
}