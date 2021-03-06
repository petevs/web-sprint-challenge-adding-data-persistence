// build your `/api/resources` router here
const express = require('express')

const router = express.Router()

router.get('/', async ( req, res, next ) => {
    try {
        res.json({message: 'I am the resource router'})

    } catch (err) {
        next(err)
    }
})

module.exports = router