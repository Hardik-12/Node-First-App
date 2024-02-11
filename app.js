const http = require('http')

// Whenever any request hit the server the function inside createserver gets executed and it handles the incoming request
const server = http.createServer((req, res) => {
    console.log(req.url, req.headers)
})

const port = 3000
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})