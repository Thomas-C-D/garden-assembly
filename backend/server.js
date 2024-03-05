require('dotenv').config()
const express = require('express');
const cors = require('cors')   
const path = require('path')

const db = require('./models');

// Required routes

const commentsCtrl = require('./controllers/comments')
const usersCtrl = require('./controllers/users')
const flowersCtrl = require('./controllers/flowers')

// Express app

const app = express();

// Middleware

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))



// Mount routes

app.use('/api/comments', commentsCtrl)
app.use('/api/users', usersCtrl)
app.use('/api/flowers', flowersCtrl)

app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});
// Listening

app.listen(process.env.PORT, function () {
    console.log('Listening on port', process.env.PORT);
});