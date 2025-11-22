// server.js
const http = require('http');
const greet = require('./Greet');

const server = http.createServer((req, res) => {
    const message = greet();   // call the module

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${message}</h1>`);
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
