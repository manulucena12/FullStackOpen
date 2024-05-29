const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const blogRouter = require('./controllers/blogRouter');
const userRouter = require('./controllers/userRouter');
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

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };