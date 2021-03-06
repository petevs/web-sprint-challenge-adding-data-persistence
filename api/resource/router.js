// build your `/api/resources` router here
const express = require('express')
const resources = require('./model')
const router = express.Router()

router.get('/', async ( req, res, next ) => {
    try {
        const results = await resources.getResources()
        res.json(results)

    } catch (err) {
        next(err)
    }
})

router.post('/', async ( req, res, next) => {
    try {
        const result = await resources.addResource(req.body)
        res.status(201).json(result)
    } catch(err) {
        next(err)
    }
})


module.exports = router