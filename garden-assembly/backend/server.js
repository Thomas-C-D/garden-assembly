require('dotenv').config()
const express = require('express');
const cors = require('cors')   
const path = require('path')

const db = require('./models');

// Required routes

const commentsCtrl = require('./controllers/comments')
const usersCtrl = require('./controllers/users')

// Express app

const app = express();

// Middleware

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Mount routes

app.use('/api/comments', commentsCtrl)
app.use('/api/users', usersCtrl)

// Listening

app.listen(process.env.PORT, function () {
    console.log('Listening on port', process.env.PORT);
});