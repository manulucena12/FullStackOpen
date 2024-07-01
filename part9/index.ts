import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { bmiCalculator } from './Exercises/bmiCalculator'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/hello', (req,res) => {
    res.send('Hello Full Stack!')
})

app.get('/bmi', (req,res) => {
    const height = Number(req.query.height)
    if(isNaN(height) || height === null){
        return res.status(400).json({error: 'Height parameter is malformated'})
    }
    const weight = Number(req.query.weight)
    if(isNaN(weight) || weight === null){
        return res.status(400).json({error: 'Weight parameter is malformated'})
    }
    const result = bmiCalculator(height,weight)
    return res.json(result)
})

app.listen(process.env.PORT, ()=>{
    console.log('App running properly')
})