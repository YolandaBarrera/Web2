const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    //salida
    res.send("Hola mundo");

});

const port = 3025; //puerto

app.listen(port,()=>{
    console.log(`Server': http://localhost:${port}`)
});
// Control+Shift+P para abrir la terminal
// Correrlo desde terminal con: "node express\app.js". La ruta del archivo js
// Verlo en el navegador desde la url