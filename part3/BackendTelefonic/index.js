const express = require('express')
const app = express()
app.use(express.json())
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
app.get('/', (req,res)=>{
    res.send('<h1>Hello Helsinki!!!</h1>')
})
app.get('/api/persons', (req,res) => {
    res.json(persons)
})
app.get('/info', (req,res)=>{
    const ids = persons.map(person=> person.id)
    const maxId = Math.max(...ids)
    const currentDate = new Date ()
    res.send(`<p><h1>The phonebook registered ${maxId} persons</h1>
        <h2>${currentDate}</h2>
    </p>`)
})
const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})