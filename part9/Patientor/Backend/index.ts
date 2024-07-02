import express from "express"
import cors from 'cors'
import 'dotenv/config'
import { getPatients } from "./Services/patients"
import { getDiagnoses } from "./Services/diagnoses"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/ping', (req,res)=>{
    res.json('Hola')
})

app.get('/api/diagnoses', (req,res) =>{
    res.json(getDiagnoses())
})

app.listen(3002, ()=>{
    console.log('App running properly')
})