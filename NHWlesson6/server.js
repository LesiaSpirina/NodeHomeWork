import http from "http";
import fs from "fs";
import path from "path";
import { Server } from "socket.io";

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {

        const filePath = path.join(process.cwd(), "./index.html");
        const rs = fs.createReadStream(filePath);

        rs.pipe(res)
    }
});
const io = new Server(server)
//  users = []
//  connections = []
io.on('connection', (client) => {
   
    console.log(`Websocket connected ${client.id}`,client.handshake.url)
    // connections.push(client)
    client.on('disconnect', (client)=> {
        console.log(`Websocket connection ended`)
    })

    client.on('client-msg', (data) => {
        client.broadcast.emit('server-msg', { nameI: data.nameI, msg: data.msg })
        client.emit('server-msg', { nameI: data.nameI, msg: data.msg })
        
    })
    
   
})

server.listen(port, host, () => 
console.log(`Server running at http://${host}:${port}`))