import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/hello', (req,res) =>{
    res.send('Hello Full Stack!')
})

app.listen(process.env.PORT, ()=>{
    console.log('App running properly')
})