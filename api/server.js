// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', ( req, res ) => {
    res.json({
        message: 'hi there'
    })
})
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong, please try again later"
    })
})

module.exports = server