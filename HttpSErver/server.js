const http = require('http');

const host = "localhost";
const port = 3000;

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end('success++++++3333333333')
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`server running on http://${host}:${port}`)
})