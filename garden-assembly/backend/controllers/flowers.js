

// Requirements
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()

const db = require('../models')

const config = require('../../jwt.config.js')

// Middleware

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decodedToken = jwt.decode(token, config.jwtSecret);
            req.user = decodedToken;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        res.status(401).json({ message: 'Missing or invalid Auth header'})
    }
};

// Routes:

// Index
router.get('/', (req, res) => {
    db.Flower.find({})
    .then(flower => res.json(flower))
})


// Get one

router.get('/:id', function ( req, res ) {
    db.Flower.findById(req.params.id)
        .then(flower => res.json(flower))
})

// Create

router.post('/', authMiddleware, (req, res) => {
    
    req.body.dateMade = new Date()
    db.Flower.create({
        ...req.body,
        userId: req.user.id,
        name: req.user.name
    })
        .then(flower => res.json(flower))
})

// Update

router.put('/:id', authMiddleware, async (req, res) => {
    const userFlower = await db.Flower.findById(req.params.id)
    if (userFlower.userId == req.user.id) {
        const newFlower = await db.Flower.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(newFlower)
    } else {
        res.status(401).json({ message: 'Invalid user or token'});
    }
})


// Destroy

router.delete('/:id', authMiddleware, async (req, res) => {

    const userFlower = await db.Flower.findById(req.params.id)
    if (userFlower.userId == req.user.id) {
        await db.Comment.deleteMany({ flowerId: req.params.id })
        const deletedFlower = await db.Flower.findByIdAndDelete(req.params.id)
        res.send('You deleted comment ' + deletedFlower._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token '});
    }
})

module.exports = router