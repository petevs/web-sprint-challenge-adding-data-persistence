// build your `/api/projects` router here
const express = require('express')
const projects = require('./model')
const router = express.Router()

router.get('/', async ( req, res, next ) => {
    try {
        const results = await projects.getProjects()
        res.status(200).json(results)

    } catch (err) {
        next(err)
    }
})

router.post('/', async ( req, res, next) => {
    try {
        const result = await projects.addProject(req.body)
        res.status(201).json(result)
    } catch(err) {
        next(err)
    }
})

module.exports = router