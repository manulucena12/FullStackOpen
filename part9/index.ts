import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { bmiCalculator } from './Exercises/bmiCalculator'
import { exerciseCalculator } from './Exercises/exerciseCalculator'

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

app.post('/exercises', (req,res) =>{
    const {daily_exercises, target } = req.body
    if(!daily_exercises){
        return res.status(400).json({error: 'Mising daily exercises'})
    }else if(daily_exercises.length < 3){
        return res.status(400).json({error: 'Need at least 3 days of tracking'})
    }
    if(!target){
        return res.status(400).json({error: 'Mising target'})
    }else if(target === 0){
        return res.status(400).json({error: 'Target cannot be 0'})
    }
    const result = exerciseCalculator(daily_exercises,target)
    return res.json(result)
})

app.listen(process.env.PORT, ()=>{
    console.log('App running properly')
})