/*
const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Devolvera que typo de dato estamos regresando y una respuesta 200 de conexion correcta
    res.write('<h1>Hola a todos los quiero</h1>\n');
    res.end();
}).listen(2000);

La otra opción es meterlo en una constante

const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Devolvera que typo de dato estamos regresando y una respuesta 200 de conexion correcta
    res.write('<h1>Hola a todos los quiero</h1>\n');
    res.end();
}

http.createServer(handleServer).listen(3000);
--------------------------------------------------------------------------
Se puede mejorar aún
const server = http.createServer(handleServer)

server.listen(3000, function(){ 
    console.log('Server on Port 3000')
})


Existe otra funcionalidad con los modulos de express que es cómo lo dejamos
*/
const express = require('express');
const colors = require('colors');
const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola Mundo</h1>');
    res.end();
})

server.listen(3000, function(){ 
    console.log('Server on Port 3000'.yellow);
})
