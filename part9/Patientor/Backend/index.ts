import express from "express"
import cors from 'cors'
import 'dotenv/config'
import { getPatients } from "./Services/patients"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/ping', (req,res)=>{
    res.json('Hola')
})

app.listen(3002, ()=>{
    console.log('App running properly')
})