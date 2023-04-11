import http from 'http';
import fs from  'fs';
import path from "path";

const host = 'localhost';
const port = 8000;

// const server = http.createServer('./get', (req, res) => {
//     if(req.method === "GET"){
//         res.writeHead(200);
//         const findDirFiles = (dirName) => {
//             return fs.readdir(dirName);
            
//             }
        
//         findDirFiles.forEach(file => {
//             console.log(file.fileName)})}
//     }

// )


const requestListener = (req, res) => {
    // let result;
    if(req.url === '/get') {
        if(req.method === 'GET'){ 
            res.writeHead(200);
            res.end(console.log(fs.readdirSync("./files")),(err) => {
                if(err){
                    res.writeHead(500);
                    res.end("Internal server error")
                }
            })
            
        }else{
            res.writeHead(405);
            res.end('HTTP method not allowed') 
        }
    }

    if(req.url === '/post'){
        if( req.method === 'POST'){
           res.writeHead(200);
           res.end('success')
        }else{
           res.writeHead(405);
           res.end('HTTP method not allowed')
        }
    }

    if(req.url === '/delete') {  
        if( req.method === 'DELETE') {
           res.writeHead(200);
           res.end('success')
        }else{
           res.writeHead(405);
           res.end('HTTP method not allowed')
        }
    }
    if(req.url === '/redirect'){
        if (req.method === 'GET'){
            res.writeHead(200);
            res.end(' Ресурс теперь постоянно доступен по адресу /redirected ')
        }else{
            res.writeHead(405);
            res.end('HTTP method not allowed')
        }
    }
}
 
const server = http.createServer(requestListener);


server.listen(port, host, () => console.log(`Server running at http://${host}:${port}`))