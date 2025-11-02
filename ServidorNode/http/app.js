const http =require('http');
const port = 3034;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hola mundo');
});

server.listen(port,()=>{
    console.log(` Servidor: http://127.0.0.1:${port}`);
});
// Control+Shift+P para abrir la terminal
// Correrlo desde terminal con: "node http\app.js". La ruta del archivo js
// Verlo en el navegador con la url

