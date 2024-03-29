
// Requirements
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()

const db = require('../models')
const config = require('../../jwt.config.js')

// Routes

// Sign up
router.post('/signup', (req, res) => {
    db.User.create(req.body)
        .then(user => {
            const token = jwt.encode({ id: user.id, name: user.name }, config.jwtSecret)
            const userId = user.id
            res.json({ 
                token: token,
                userId: userId
            })
        })
        .catch(() => {
            res.status(401)
                .json({ message: 'Could not create new user, please try again'})
        })
})

// Log in
router.post('/login', async (req, res) => {
    const foundUser = await db.User.findOne({ email: req.body.email })

    if (foundUser && foundUser.password === req.body.password) {
        const payload = { id: foundUser.id, name: foundUser.name }
        const token = jwt.encode(payload, config.jwtSecret)
        const userId = foundUser.id
        res.json({
            token: token,
            email: foundUser.email,
            userId: userId
        })
    } else {
        res.status(401)
            .json({ message: 'Could not find user with email/password'})
    }
})

module.exports = router