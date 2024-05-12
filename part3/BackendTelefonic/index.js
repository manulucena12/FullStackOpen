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
app.get('/api/persons/:id', (req,res)=>{
    const selectedId = Number(req.params.id)
    const personId = persons.find(person => person.id === selectedId)
    if(personId){
        res.json(personId)
    }else{
        res.status(404).end()
    }
})
app.delete('/api/persons/:id', (req,res)=>{
    const selectedId = Number(req.params.id)
    persons = persons.filter(person => person.id !== selectedId)
    res.json(persons)
})
// I used the biggest Id method instead of Math.random() because it eliminates any posibility of coincidences
app.post('/api/persons/', (req,res)=>{
    const postBody = req.body
    const ids = persons.map(person=> person.id)
    const maxId = Math.max(...ids)
    const addedName = persons.some(person => person.name === postBody.name)
    if(addedName || !postBody.name || !postBody.number){
        res.status(409).end()
    }else{
        const newPerson = {
            id: maxId+1,
            name: postBody.name,
            number: postBody.number
        }
        persons = [...persons, newPerson]
        res.json(newPerson)
    }
})
const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})