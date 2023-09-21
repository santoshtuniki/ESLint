const express = require('express');
const http = require('http');

const port = 3000;

const app = express();

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
    console.log(`server is listening on port ${port}`);
});