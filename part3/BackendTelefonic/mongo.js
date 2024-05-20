const mongoose = require('mongoose')
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://manulucena12:${dbPassword}@cluster0.xpeukoi.mongodb.net/manudb?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(connectionString)
.then(()=>{
    console.log('Successful connection')
}).catch(error=>{
    console.error(error)
})