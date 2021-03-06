// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')
const projectsRouter = require('./project/router')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', ( req, res ) => {
    res.json({
        message: 'hi there'
    })
})
server.use('/api/projects', projectsRouter)

module.exports = server