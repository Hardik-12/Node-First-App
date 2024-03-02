const http = require('http')
const fs = require('fs')
const routes = require('./routes')

// Whenever any request hit the server the function inside createserver gets executed and it handles the incoming request
const server = http.createServer(routes)

const port = 3000
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})