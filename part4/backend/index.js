const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const blogRouter = require('./controllers/blogRouter');
const userRouter = require('./controllers/userRouter');
const loginRouter = require('./controllers/loginRouter');
const testingRouter = require('./controllers/testRouter');
require('dotenv').config();

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env;
const mongoUrl = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI;
mongoose.connect(mongoUrl).then(() => {
  console.log('Successful connection');
});

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);

if(NODE_ENV === 'test'){
  console.log('Reset database feature avaible')
  app.use('/api/reset', testingRouter)
}

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };