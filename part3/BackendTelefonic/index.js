require ('./mongo')
const Person = require ('./modules/person')
const express = require('express')
const morgan = require('morgan')
const cors = require ('cors')
const app = express()   
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
function customPostFormat(tokens, req, res) {
    return JSON.stringify({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: tokens.status(req, res),
      requestBody: JSON.stringify(req.body)
    });
}
app.use(morgan(customPostFormat))
let persons = []
app.get('/', (req,res)=>{
    res.send('<h1>Hello Helsinki!!!</h1>')
})
app.get('/api/persons', (req,res) => {
    Person.find({})
    .then(persons=>{
        res.json(persons)
    })
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
    const newPerson =  new Person ({
        name: req.body.name,
        number: req.body.number
    })
    newPerson.save()
    .then(response=>{
        res.json(response)
    })
})
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{ 
    console.log(`http://localhost:${PORT}`)
})