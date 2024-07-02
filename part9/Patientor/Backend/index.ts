import express from "express"
import cors from 'cors'
import 'dotenv/config'
import { getDiagnoses } from "./Services/diagnoses"
import { getLimitedPatients } from "./Utils/limited"
import { newPatient } from "./Services/patients"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/ping', (req,res) => {
    res.json('Hola')
})

app.get('/api/diagnoses', (req,res) => {
    res.json(getDiagnoses())
})

app.get('/api/patients', (req,res) => {
    res.json(getLimitedPatients())
})

app.post('/api/patients', (req,res) => {
    const result = newPatient(req.body)
    if(result === undefined){
        return res.status(400).json({error: 'Malformated parameter'})
    }
    return res.status(200).json(result)
})

app.listen(3002, ()=>{
    console.log('App running properly')
})