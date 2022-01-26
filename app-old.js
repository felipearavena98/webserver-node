const http = require('http');

http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json' });

    res.write('Hola Mundo');
    res.end();
})
.listen(5055);

console.log('Escuchando el puerto', 5055);