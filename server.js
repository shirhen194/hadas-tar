// Get dependencies
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

// Get our API routes & Initialize Express
const api = require('./api.js')
const app = express()

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Point static path to dist
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules'))) //you might not need this if you want to keep things simple

// Set our api routes
app.use('/', api)


// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Get port and store in Express
const port = process.env.PORT || '3000'
app.set('port', port)

// Create & run the server
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`))