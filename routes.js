const fs = require('fs')


const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Welcome to node.js server</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        res.end()
    }
    
    if(url === '/message' && method === 'POST'){
        // Concept of streams and buffers and how node handles it
        const body = []
        req.on('data', (chunk) => {
            console.log("Chunks of data", chunk)
            body.push(chunk)
        })
    
        // This is fired when incoming request is handled
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            console.log("All chunks", message)
            // fs.writeFileSync('message.txt', message)
            fs.writeFile('message.txt', message, (err) => {
                if(!err){
                    res.statusCode = 302
                    res.setHeader('Location', '/')
                    res.end()
                }
            })
        })
    }
}

module.exports = requestHandler;
