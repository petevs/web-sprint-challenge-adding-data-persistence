// build your `/api/tasks` router here
const express = require('express')

const router = express.Router()

router.get('/', async ( req, res, next ) => {
    try {
        res.json({message: 'I am the tasks router'})

    } catch (err) {
        next(err)
    }
})

module.exports = router