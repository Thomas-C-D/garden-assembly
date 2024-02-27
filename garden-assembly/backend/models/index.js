require('dotenv').config()
const mongoose = require('mongoose');

const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

module.exports = {
    Comment: require('./comment'),
    User: require('./user'),
}