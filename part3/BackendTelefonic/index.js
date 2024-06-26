/* I don't know why i can´t push the frontend to github, but i made sure it can be work with 
all the changes i've made in the backend, if you need the files of the front, send me a email at mlucenasalas@gmail.com */
require ('./mongo')
const Person = require ('./modules/person')
const express = require('express')
const morgan = require('morgan')
const cors = require ('cors')
const path = require('path');
const app = express()   
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors());  
app.use(express.static('public'));
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
    Person.findById(req.params.id)
    .then(person=>{
        res.json(person)
    })
})
app.delete('/api/persons/:id', (req,res,next)=>{
    Person.findByIdAndDelete(req.params.id)
    .then(response=>{
        res.status(204).end()
    })
    .catch(error=>{
        next(error)
    })
})
// I used the biggest Id method instead of Math.random() because it eliminates any posibility of coincidences
app.post('/api/persons/', (req,res,next)=>{
    const newPerson =  new Person ({
        name: req.body.name,
        number: req.body.number
    })
    newPerson.save()
    .then(response=>{
        res.json(response)
    })
    .catch(error=>{
        next(error)
    })
})
app.put('/api/persons/:id', (req,res,next)=>{
    const updatePerson = {
        name: req.body.name,
        number: req.body.number
    }
    Person.findByIdAndUpdate(req.params.id, updatePerson, {new: true})
    .then(result=>{
        if(result){
            res.json(result)
        }else{
            res.status(400).end()
        }
    })
    .catch(error=>{
        next(error)
    })
})
app.use((error,req,res,next)=>{
    console.log(error.name)
    if(error.name === 'CastError'){
        res.status(404).end()
    }else if(error.name === 'ValidationError'){
        res.status(304).send({error: 'The object cant be validated '})
    }else{
        res.status(503).end()
    }
})
app.get('/phonebook', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{ 
    console.log(`http://localhost:${PORT}`)
})